/*
 * This code and all components (c) Copyright 2025, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the Wowza Public License version 1.0, available at https://github.com/WowzaMediaSystems/dev-guides/blob/main/LICENSE.txt.
 */

import { useState, useRef, useEffect } from "react";
import "@flowplayer/player/flowplayer.css";
import Flowplayer, { useFlowplayer } from "@flowplayer/react-flowplayer";
import {
  PAUSE,
  PLAYING,
  STANDARD_ERROR,
  ENDED,
  ERROR,
} from "@flowplayer/player/core/events";
import type { Player } from "@flowplayer/player";
import { setupFlowplayer } from "@/lib/setup-flowplayer";
import { DEFAULT_LIVESTREAM_URL, FLOWPLAYER_TOKEN } from "../config";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import Typewriter from "typewriter-effect";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function LiveStreamPage() {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const player = useFlowplayer(playerRef) as Player;
  setupFlowplayer("hls", "subtitles");

  const [demoPlaybackState, setDemoPlaybackState] = useState("paused");
  const [videoUrl, setVideoUrl] = useState<string | undefined>(
    DEFAULT_LIVESTREAM_URL
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

  useEffect(() => {
    if (!player) return;

    player.on(PAUSE, onHandleState);
    player.on(PLAYING, onHandleState);

    player.on(STANDARD_ERROR, (e) => {
      console.error("FLOWPLAYER - STANDARD_ERROR:", e);
    });

    player.on(ERROR, (e) => {
      console.error("FLOWPLAYER - ERROR:", e);
    });

    player.on(ENDED, (e) => {
      console.error("FLOWPLAYER - ENDED:", e);
    });

    // player.on(FINISHED, (e) => {
    //   console.error("FLOWPLAYER - FINISHED:", e);
    // });

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
            Wowza Live Streaming
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With Wowza Streaming Engine
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
                  onError={(error) => {
                    console.error("Flowplayer component error:", error);
                  }}
                />
              </div>
            </Card>
          </div>

          <div className="space-y-4 order-3 lg:order-2">
            <Card className="shadow-elegant aspect-video flex flex-col">
              <div className="space-y-6">
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Here is the playback URL of the stream from Wowza Streaming
                    Engine, configured in the config.ts file of this project.
                  </p>
                  <span className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-md">
                    {videoUrl}
                  </span>
                </div>
              </div>
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
