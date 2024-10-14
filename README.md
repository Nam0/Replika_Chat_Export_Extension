# Replika Chat Exporter Extension Rewrite

## Overview

This is a rewrite of the original [Replika Chat Exporter](https://github.com/devidw/replika-chat-export) extension, which allows users to export their chat history from the Replika app. This version removes the paywall and aims to add support for Firefox alongside Chrome.

## Features

- **Export Chat History**: Seamlessly export your chat conversations from Replika.
- **No Paywall**: Enjoy the full functionality of the chat exporter without any fees.
- **Firefox Compatibility**: Refactoring the code to ensure compatibility with Firefox.
- **Readable Code**: Making that mf make sense cause it's hot bloatware garbage rn

## Work In Progress

- **Voice Exports**: Voice exports currently fail due to CORS - strict-origin-when-cross-origin
    - I gotta play around with corsproxy more and I can prolly get that to work and save it somehow but lazy rn
- **Comments**: I've looked at it so long it makes sense, but at the same time I'm still lost in some areas—gotta add comments later. like for the md5 hashing bit for timestamps i'm a bozo there

## Firefox Installation
Firefox is lovely and lets me upload extensions for free you should be able to view it here sometime soon!
[Addon Page](https://addons.mozilla.org/en-US/firefox/addon/replika-chat-export/)

## Chrome Installation

Currently, the extension is not available on the Chrome Web Store due to a $5 upload fee. However, you can easily use it in Chrome by following these steps:

1. Download the **Chrome_Replika_Exporter.zip** file.
2. Unzip it to a location of your choice.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode** in the top right corner.
5. Click **Load unpacked** and navigate to the unzipped folder.
6. Select the folder to add the extension.

## Development

Contributions to improve the extension or its codebase are welcome! Feel free to open an issue or submit a pull request.

## Contact

For questions or support, please open an issue in the repository or figure it out with this [wonderful tool](https://duckduckgo.com).

## Stuff

I don’t care if you mess it up, but please make an issue request and I might help! Once I get it up and running smoothly, I will offer more assistance, but until then, you're on your own.

I take no responsibility for any issues you run into while using this; all legal rights are where they’re owed. Don’t pay a thief for free stuff.

My son Jimmy(my Shitty AI) wrote this README file; if it's bad, blame his ass idk or care to format markdown files.
