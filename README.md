## Kick-start project:
##### Flux architecture
Redux
https://redux.js.org/introduction/getting-started

##### Data Caching / Offline
Redux Persist
https://github.com/rt2zz/redux-persist

##### HTTP client
Axios
https://github.com/axios/axios

##### Routing and navigation
React Native Router Flux
https://github.com/aksonov/react-native-router-flux

##### Internationalization
i18n-js
https://github.com/fnando/i18n-js

##### Code Linting
Airbnb's JS Linting
https://github.com/airbnb/javascript

##### Deployment strategy
React Native Rename
https://github.com/junedomingo/react-native-rename

FastLane (In progress)
https://docs.fastlane.tools/getting-started/cross-platform/react-native/

##### UI Toolkit/s
Native Base for native mobile
https://nativebase.io/

##### Splash Screen
React Native Splash Screen
https://github.com/crazycodeboy/react-native-splash-screen


## Steps to create your own project with this BaseProject
##### 1. Clone the project and save in your workspace.

##### 2. Put the head on the last change of the repository.
NOTE: Open the repository and check the last change
Eg. git checkout "develop"  

##### 3. Connect your repository
Delete folder .git of the project and init a new one
    1. rm -rf .git
    2. git init
    3. Connect your new repository. Eg. `git remote add origin git@burns.singularfactory.com:<project-name>`

##### 4. Rename your project
Before rename the project, make sure the app_name value in 
./android/app/src/main/res/values/strings.xml must be the same with the current project folders.
In our case, app_name is a comment. 
    1. Uncomment the app_name to avoid destroy ios folder. Important step!!
    2. Rename the app. Eg. `react-native-rename "New Project" -b com.singularfactory.newProject`
    3. Comment app_name again.

Last steps:
    1. Rename APP_ID, APP_NAME and STORE_ANDROID_ID of environment files (.env and .env.pro)
    2. Rename Schemes with the new name into XCode (Schemes BaseProjectDev and BaseProjectPro)
    3. Rename Bundle Identifier with the new package name (Dev and Pro)
  
##### 5. Define the location of android sdk directory (only for Android)
Steps:
    1. Go to your React-native Project -> Android
    2. Create a file local.properties
    3. Open the file and paste your Android SDK path like below:
        - in Windows sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
        - in macOS sdk.dir = /Users/USERNAME/Library/Android/sdk
        - in linux sdk.dir = /home/USERNAME/Android/Sdk
        Note: Replace USERNAME with your user name

##### 6. Replace icons (launcher) and Splash of the app (Experimental)
Look at document `set-icon.md` and `set-splash.md` into documentation folder.

##### 7. Install the project
npm install && cd ios && pod install && cd ..

##### 8. Start coding and enjoy!


## Troubleshooting
##### react-native-config
To allow access to .env variables from xCode (Info.plist),
you need to do this extra steps:
https://github.com/luggit/react-native-config/issues/391#issuecomment-632331803

##### react-native 0.63 and babel-plugin-module-resolver: "4.0.0" no works on iOS release
To fix this problem temporarily. 
Add this code to Bundle React Native code and images Build Phase in XCode: 
cd $PROJECT_DIR/..
export NODE_BINARY=node
./node_modules/react-native/scripts/react-native-xcode.sh

## References
#### react-native-base-project
`https://github.com/SuTV/react-native-base-project`

#### react-native-starter-kit
`https://github.com/mcnamee/react-native-starter-kit`

#### react-native-boilerplate
`https://github.com/thecodingmachine/react-native-boilerplate`
