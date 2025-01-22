# PWA
## Features
### Goal 1 : Basics
This PWA must be able to :
- Take photos using camera
- Send notifications ( When taking photos, for example)
- Geolocate
- Perform in offline mode
- Manage photo storage using the local storage
### Goal 2 : Online
This PWA must be put online from a VPS.   
To be available for download, it must be secured by an HTTPS certificate.   
This PWA must be able to :
- Make a phone call
- Enable vibrate mode during notification
- Show battery level
- Read an SMS to validate the sending of a password
### Goal 3 : Connected
This PWA must be able to :
- Manage a common chat server
- Manage a video chat
## Packages & tools needed
- PWA config : vite-plugin-pwa
- Service workers : workbox-window
- Camera : vue-web-cam
- Geolocation : Native API
- Photo storage : localForage
- Read an SMS to validate the sending of a password : WebOTP API
- Chat server : Socket.io
- Video chat : PeerJS
