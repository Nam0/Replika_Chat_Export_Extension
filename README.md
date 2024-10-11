# Replika Chat Exporter Extension Rewrite

## Overview

This is a rewrite of the original [Replika Chat Exporter](https://github.com/devidw/replika-chat-export) extension, which allows users to export their chat history from the Replika app. This version removes the paywall and aims to add support for Firefox alongside Chrome.

## Features

- **Export Chat History**: Seamlessly export your chat conversations from Replika.
- **No Paywall**: Enjoy the full functionality of the chat exporter without any fees.
- **Firefox Compatibility**: Refactoring the code to ensure compatibility with Firefox.
- **Readable Code**: Making that mf make sense cause it's hot bloatware garbage rn

## Work In Progress

- **Voice Exports**: Voice exports current fail due to CORS - strict-origin-when-cross-origin
    - idfk how to fix this but ye it's a thing
- **Manifest Stuff**: idk Im too lazy to setup a google dev acct to post it on there I'll probably do that later
- **Comments**: I've looked at it so long it makes sense but at the same time I'm still lost in some areas gotta add comments later
- **Fix Firefox Exports**: Sometimes Firefox exports fail due to the tab not being active when the browser attempts to inject scripts into it gotta fix that
- **Strip it**: Idk about you gamers but I think the lodash bit is kinda hot garbage, can store everything in blob storage and pull it easier that way, im not 100% sure but I belive we can use that to get voice Exports as well. Cutting out svelte will cut down on the file size of index.js slight preformance boost there

## Development

The code is currently undergoing refactoring to enhance performance and readability. Contributions to improve the extension or its codebase are welcome! Feel free to open an issue or submit a pull request.

## Contact

For questions or support, please open an issue in the repository or figure it out with this [wonderful tool](https://duckduckgo.com)

## Stuff

I don’t care if you mess it up, but please make an issue request and I might help! Once I get it up and running smoothly, I will offer more assistance, but until then, you're on your own.

I take no responsibility for any issues you run into while using this; all legal rights are where they’re owed. Don’t pay a thief for free stuff.

My son Jimmy wrote this readme file if it's bad blame his ass idk or care to format markdown files.