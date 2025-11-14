/*
 * This code and all components (c) Copyright 2025, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the Wowza Public License version 1.0, available at https://github.com/WowzaMediaSystems/dev-guides/blob/main/LICENSE.txt.
 */

import { useState, useRef, useEffect } from "react";
import "@flowplayer/player/flowplayer.css";
import Flowplayer, { useFlowplayer } from "@flowplayer/react-flowplayer";
import { PAUSE, PLAYING } from "@flowplayer/player/core/events";
import type { Player } from "@flowplayer/player";
import { setupFlowplayer } from "@/lib/setup-flowplayer";
import { DEFAULT_TRANSCRIPTION_STREAM_URL, FLOWPLAYER_TOKEN } from "../config";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import Typewriter from "typewriter-effect";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sampleTranscript = [
  {
    timestamp: "00:00",
    text: "Welcome to this comprehensive tutorial on modern web development. Today we'll explore the latest techniques and best practices that every developer should know.",
  },
  {
    timestamp: "00:15",
    text: "We'll start by discussing the fundamentals of responsive design and how to create layouts that work seamlessly across all device sizes.",
  },
];

export default function VideoTranscript() {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const player = useFlowplayer(playerRef) as Player;
  setupFlowplayer("hls", "subtitles");

  const [demoPlaybackState, setDemoPlaybackState] = useState("paused");
  const [videoUrl, setVideoUrl] = useState<string | undefined>(
    DEFAULT_TRANSCRIPTION_STREAM_URL
  );
  const [captionText, setCaptionText] = useState<string>("");

  const togglePlay = () => {
    if (!player) return; // No API available
    player.togglePlay();
  };

  const onHandleState = (ev: Event) => {
    if (ev.type === PAUSE) setDemoPlaybackState("paused");
    if (ev.type === PLAYING) setDemoPlaybackState("playing");
  };

  const prettifyCaptionText = (text: string) => {
    return text.replace(/(\r\n|\n|\r)/g, " ");
  };

  useEffect(() => {
    if (!player) return;

    const processTrack = (track: TextTrack) => {
      if (!["subtitles", "captions"].includes(track.kind)) return;
      track.addEventListener("cuechange", (e) => {
        Array.from(track.activeCues).forEach((cue: VTTCue) => {
          const newCaption = prettifyCaptionText(cue.text);
          setCaptionText(newCaption);

          console.log(newCaption);
        });
      });
    };

    player.on(PAUSE, onHandleState);
    player.on(PLAYING, onHandleState);

    // Auto-show subtitles for default language
    player.on("tracks:text:all", (e) => {
      if (!player.opts.lang) return;

      const defaultTrack = [...player.textTracks].find(
        (track) => track.language == player.opts.lang
      );
      if (defaultTrack) defaultTrack.mode = "hidden";
    });

    player.textTracks.addEventListener("change", (e) => {
      Array.from(player.textTracks).forEach((track) => {
        processTrack(track);
      });
    });

    return () => {
      // Cleanup on unmount
      if (!player) return;
      player.off(PAUSE, onHandleState);
      player.off(PLAYING, onHandleState);
    };
  }, [player]);

  return (
    <div className="min-h-screen bg-gradient-subtle">

      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Wowza AI Live Subtitles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time AI generated subtitles and language translation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
          {/* Video Player Section */}
          <div className="space-y-4 order-1">
            <Card className="p-0 overflow-hidden shadow-video">
              <div className="relative aspect-video bg-muted">
                <Flowplayer
                  src={videoUrl}
                  token={FLOWPLAYER_TOKEN}
                  ref={playerRef}
                  opts={{
                    ui: 1024,
                    asel: true,
                    fullscreen: false,
                    autoplay: true,
                    lang: "en",
                  }}
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
                {/* <p className="text-sm text-muted-foreground mt-1">
                  Complete subtitles with timestamps
                </p> */}

                <div className="flex justify-center">
                  <span className="inline-flex items-center justify-center h-6 bg-primary/10 text-primary text-md font-mono rounded-md flex-shrink-0">
                    <Typewriter
                      options={{
                        strings: [captionText],
                        autoStart: true,
                        loop: false,
                        cursor: "_",
                        delay: 1,
                        deleteSpeed: 999999,
                        // pauseFor: 500,
                      }}
                    />
                  </span>
                </div>
              </div>


            </Card>
          </div>

          {/* Transcript Section */}
          <div className="space-y-4 order-3 lg:order-2">
            <Card className="shadow-elegant aspect-video flex flex-col">
              <div className="p-6 border-b border-border flex-shrink-0">

                <p className="text-sm text-muted-foreground mb-2">
                    Here is the playback URL of the stream from Wowza Streaming
                    Engine, configured in the config.ts file of this project.
                  </p>
                  <span className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-md">
                    {videoUrl}
                  </span>
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

      <div className="mb-8 text-center">
        <p className="text-sm text-muted-foreground mb-2">
          Source code for this demo is available on GitHub: <br />{" "}
          <a href="https://github.com/WowzaMediaSystems/dev-guides">
            https://github.com/WowzaMediaSystems/dev-guides
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}
