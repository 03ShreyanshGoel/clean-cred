"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Upload, Camera, CheckCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ScanPage() {
  const { toast } = useToast()
  const [scanStep, setScanStep] = useState<"initial" | "scanning" | "result">("initial")
  const [reportType, setReportType] = useState<"full" | "issue" | "other">("full")
  const [binDetails, setBinDetails] = useState({
    floor: "3rd Floor",
    flat: "B-301",
    binType: "Biodegradable Waste",
  })

  const handleScan = () => {
    setScanStep("scanning")
    // Simulate scanning process
    setTimeout(() => {
      setScanStep("result")
      toast({
        title: "QR Code Scanned",
        description: "Bin identified successfully",
      })
    }, 2000)
  }

  const handleReset = () => {
    setScanStep("initial")
    setReportType("full")
  }

  const handleSubmit = () => {
    toast({
      title: "Report Submitted",
      description: `Your ${reportType === "full" ? "bin full report" : reportType === "issue" ? "issue report" : "report"} has been submitted successfully.`,
    })
    setScanStep("initial")
  }

  const handleFloorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBinDetails({ ...binDetails, floor: e.target.value })
  }

  const handleFlatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBinDetails({ ...binDetails, flat: e.target.value })
  }

  const handleBinTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBinDetails({ ...binDetails, binType: e.target.value })
  }

  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6 flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Scan Bin QR Code</h1>
        <p className="text-muted-foreground">Scan the QR code on your bin to report its status</p>
      </div>

      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Bin Status Report</CardTitle>
            <CardDescription>Scan the QR code on your bin or manually select your bin</CardDescription>
          </CardHeader>
          <CardContent>
            {scanStep === "initial" && (
              <Tabs defaultValue="scan" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="scan">Scan QR</TabsTrigger>
                  <TabsTrigger value="manual">Manual Select</TabsTrigger>
                </TabsList>

                <TabsContent value="scan" className="space-y-4">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex h-48 w-48 items-center justify-center rounded-lg border-2 border-dashed">
                      <QrCode className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <Button onClick={handleScan}>
                      <Camera className="mr-2 h-4 w-4" />
                      Start Scanning
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="manual" className="space-y-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="floor">Floor</Label>
                        <select
                          className="w-full rounded-md border p-2"
                          value={binDetails.floor}
                          onChange={handleFloorChange}
                        >
                          <option>1st Floor</option>
                          <option>2nd Floor</option>
                          <option>3rd Floor</option>
                          <option>4th Floor</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="flat">Flat</Label>
                        <select
                          className="w-full rounded-md border p-2"
                          value={binDetails.flat}
                          onChange={handleFlatChange}
                        >
                          <option>A-101</option>
                          <option>A-102</option>
                          <option>B-201</option>
                          <option>B-301</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bin">Bin Type</Label>
                      <select
                        className="w-full rounded-md border p-2"
                        value={binDetails.binType}
                        onChange={handleBinTypeChange}
                      >
                        <option>Biodegradable Waste</option>
                        <option>Non-biodegradable Waste</option>
                        <option>Common Area Bin</option>
                      </select>
                    </div>
                    <Button onClick={() => setScanStep("result")} className="w-full">
                      Continue
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            )}

            {scanStep === "scanning" && (
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <div className="h-48 w-48 animate-pulse rounded-lg bg-muted"></div>
                <p className="text-center text-muted-foreground">Scanning QR code...</p>
              </div>
            )}

            {scanStep === "result" && (
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <div>
                      <p className="font-medium">Bin Identified</p>
                      <p className="text-sm text-muted-foreground">
                        {binDetails.floor}, Flat {binDetails.flat}, {binDetails.binType}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>What would you like to report?</Label>
                  <RadioGroup
                    defaultValue="full"
                    value={reportType}
                    onValueChange={(value) => setReportType(value as any)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full" id="full" />
                      <Label htmlFor="full">Bin is full and needs emptying</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="issue" id="issue" />
                      <Label htmlFor="issue">There's an issue with the bin</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                {reportType === "issue" && (
                  <div className="space-y-2">
                    <Label htmlFor="issue-details">Describe the issue</Label>
                    <Textarea id="issue-details" placeholder="What's wrong with the bin?" />
                  </div>
                )}

                {reportType === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="other-details">Details</Label>
                    <Textarea id="other-details" placeholder="Provide details about your report" />
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="block">Add a photo (optional)</Label>
                  <div className="flex items-center justify-center rounded-lg border-2 border-dashed p-4">
                    <div className="flex flex-col items-center">
                      <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          {scanStep === "result" && (
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleReset}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Submit Report</Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}
