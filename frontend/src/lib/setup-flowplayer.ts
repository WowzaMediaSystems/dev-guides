import flowplayer from "@flowplayer/player"
import HLSPlugin from "@flowplayer/player/plugins/hls";
import SubtitlesPlugin from "@flowplayer/player/plugins/subtitles"
import ID3Plugin from "@flowplayer/player/plugins/id3"

const defaultPlugins = (flowplayer as any).extensions.slice(0)

const Plugins = {hls: HLSPlugin, subtitles: SubtitlesPlugin, ID3: ID3Plugin} as const

type AvailablePlugins = keyof typeof Plugins
/**
 * defines a utility to dynamically attach and remove plugins from the flowplayer singleton umd
 *
 * @param configuredPlugins
 * @returns flowplayer
 */
export function setupFlowplayer (...configuredPlugins: AvailablePlugins[]) {
  const ourPlugins = configuredPlugins.map(name => Plugins[name])
  Object.assign(flowplayer, {extensions: [...defaultPlugins, ...ourPlugins]})
  return flowplayer
}