/*
 * This code and all components (c) Copyright 2025, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the Wowza Public License version 1.0, available at https://github.com/WowzaMediaSystems/dev-guides/blob/main/LICENSE.txt.
 */

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const sampleTranscript = [
  {
    timestamp: "00:00",
    text: "Welcome to this comprehensive tutorial on modern web development. Today we'll explore the latest techniques and best practices that every developer should know."
  },
  {
    timestamp: "00:15",
    text: "We'll start by discussing the fundamentals of responsive design and how to create layouts that work seamlessly across all device sizes."
  },
  {
    timestamp: "00:30",
    text: "Next, we'll dive into advanced CSS techniques including CSS Grid, Flexbox, and custom properties that make styling more efficient and maintainable."
  },
  {
    timestamp: "00:45",
    text: "Then we'll explore modern JavaScript frameworks and libraries, focusing on React and its ecosystem of tools and best practices."
  },
  {
    timestamp: "01:00",
    text: "We'll also cover state management patterns, from local component state to global state management solutions like Redux and Zustand."
  },
  {
    timestamp: "01:15",
    text: "Performance optimization is crucial for modern web applications. We'll discuss code splitting, lazy loading, and other techniques to improve user experience."
  },
  {
    timestamp: "01:30",
    text: "Testing is an essential part of the development process. We'll explore unit testing, integration testing, and end-to-end testing strategies."
  },
  {
    timestamp: "01:45",
    text: "Accessibility should never be an afterthought. We'll learn how to build inclusive applications that work for users with different abilities."
  },
  {
    timestamp: "02:00",
    text: "Version control with Git is fundamental to modern development workflows. We'll cover branching strategies and collaborative development practices."
  },
  {
    timestamp: "02:15",
    text: "Deployment and DevOps practices have evolved significantly. We'll explore containerization, CI/CD pipelines, and cloud deployment strategies."
  },
  {
    timestamp: "02:30",
    text: "Security considerations are paramount in web development. We'll discuss common vulnerabilities and how to protect against them."
  },
  {
    timestamp: "02:45",
    text: "Finally, we'll look at emerging trends and technologies that are shaping the future of web development, including WebAssembly and progressive web apps."
  },
  {
    timestamp: "03:00",
    text: "By the end of this tutorial, you'll have a solid foundation in modern web development practices and be ready to build robust, scalable applications."
  }
];

export default function ObjectDetection() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Object Detection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn the latest techniques and best practices for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
          {/* Video Player Section */}
          <div className="space-y-4 order-1">
            <Card className="p-0 overflow-hidden shadow-video">
              <div className="relative aspect-video bg-muted">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Modern Web Development Tutorial"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>
          </div>

          {/* Subtitles Section */}
          <div className="lg:col-span-2 lg:order-3 order-2">
            <Card className="shadow-elegant">
              <div className="p-6 border-b border-border">
                <h2 className="text-2xl font-semibold text-foreground">
                  Video Subtitles
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete subtitles with timestamps
                </p>
              </div>
              
              <ScrollArea className="h-[300px] p-6">
                <div className="space-y-4">
                  <div className="group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center justify-center w-16 h-6 bg-primary/10 text-primary text-xs font-mono rounded-md flex-shrink-0">
                        00:00
                      </span>
                      <p className="text-foreground text-sm leading-relaxed">
                        Welcome to this comprehensive tutorial on modern web development. Today we'll explore the latest techniques and best practices that every developer should know.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </Card>
          </div>

          {/* Transcript Section */}
          <div className="space-y-4 order-3 lg:order-2">
            <Card className="shadow-elegant aspect-video flex flex-col">
              <div className="p-6 border-b border-border flex-shrink-0">
                <h2 className="text-2xl font-semibold text-foreground">
                  Video Transcript
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Follow along with the complete transcript
                </p>
              </div>
              
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  {sampleTranscript.map((entry, index) => (
                    <div
                      key={index}
                      className="group hover:bg-muted/50 -mx-2 px-2 py-3 rounded-lg transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-12 h-8 bg-primary/10 text-primary text-sm font-mono rounded-md">
                            {entry.timestamp}
                          </span>
                        </div>
                        <p className="text-foreground leading-relaxed text-sm">
                          {entry.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}