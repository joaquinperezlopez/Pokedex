# Pokédex!

The Pokédex is a mobile application that provides information about various Pokémon species, their characteristics, abilities, and more.

## Table of Contents
- [Introduction](#introduction)
- [Setup](#setup)
  - [Clone the project](#clone-the-project)
  - [Create .env file](#create-env-file)
  - [Install Pods (for iOS)](#install-pods-for-ios)
- [Running the App](#running-the-app)
  - [iOS](#ios)
  - [Android](#android)
- [API Information](#api-information)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Pokédex project is built to provide a comprehensive and user-friendly experience for Pokémon enthusiasts. With this app, users can explore a vast collection of Pokémon species, learn about their abilities, types, and more. The app uses the PokeAPI as its data source to retrieve information about various Pokémon.

## Setup
Follow these steps to set up the project on your local development environment.

### Clone the Project
To get started, clone this repository to your local machine using the following command:

```
git clone https://github.com/joaquinperezlopez/pokedex.git
cd pokedex
```


### Create .env file
Create a `.env` file at the root level of the project and add the following variables with their respective values:

```
AUTH_BASE_URL={Confidential}
AUTH_API_VERSION={Confidential}
POKEMON_API_BASE_URL=https://pokeapi.co/api
POKEMON_API_VERSION=/v2
```

### Install Pods (for iOS)
If you're running the app on an iOS simulator, you'll need to install the CocoaPods dependencies. To do this, run the following command:

`cd ios && pod install && cd ..`


## Running the App
Follow these steps to run the app on your device or simulator.

### iOS
To run the app on an iOS simulator, run the following command:

`yarn ios`


### Android
To run the app on an Android emulator or device, run the following command:

`yarn android`


## API Information

The login AUTH_BASE_URL and AUTH_API_VERSION belongs to a private company, at the moment, I cannot disclosure that info.

The app uses the PokeAPI as its data source to retrieve information about various Pokémon. You can find more information about the API at the following link:

[PokeAPI Documentation](https://pokeapi.co/docs/v2)