# Expo Dev Client Fail Repro

This repository demonstrates a potential bug encountered when upgrading `expo-dev-client` beyond version `5.0.15`.

## How to Test

Follow the steps below to reproduce the issue.

### Test Successful Scenario (with `expo-dev-client <= 5.0.15`)

1.  Clone this repository:
    ```bash
    git clone <repository-url>
    cd expo-issue-repro
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Generate the native project files:
    ```bash
    npm expo prebuild --clean
    ```
4.  Run the app on iOS:
    ```bash
    npm run ios
    ```
5.  **Expected Outcome:** The app should build, load, and run without errors.

### Test Unsuccessful Scenario (with `expo-dev-client@latest`)

1.  Ensure the app from the previous scenario is stopped.
2.  Install the latest version of `expo-dev-client`:
    ```bash
    npm i expo-dev-client@latest
    ```
3.  Generate the native project files again:
    ```bash
    npm expo prebuild --clean
    ```
4.  Run the app on iOS:
    ```bash
    npm run ios
    ```
5.  **Expected Outcome:** The app should build and load, but immediately crash or display a fatal error screen (potentially mentioning `RCTFatal`).



