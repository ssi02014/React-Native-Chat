# π» React-Native-Chat
### React-Native-Chat μ μ₯μ

<br />

## π₯ App View
<!-- <p align='center'>
    <img src='' width="400" height="730">
</p> -->

<br />

## π κΈ°μ  μ€ν λ° μ£Όμ λΌμ΄λΈλ¬λ¦¬
1. React-Native
2. Styled-Components: Styling
3. Google Material Design: Icon
4. React-Navigation(Stack, Tab)
5. Context API: μν κ΄λ¦¬
6. Firebase: μλΉμ€μ νμν μλ²μ λ°μ΄ν°λ² μ΄μ€λ₯Ό μ§μ  κ΅¬μΆνμ§ μκ³  κ°λ°μ΄ κ°λ₯ν κ°λ° νλ«νΌ
6. expo-image-picker: κΈ°κΈ°μ μ¬μ§μ΄λ μμμ κ°μ Έμ¬ μ μλλ‘ μμ€ν UIμ μ κ·Όν  μ μλ κΈ°λ₯μ μ κ³΅
7. moment: μκ°μ λ€μν ννλ‘ λ³κ²½νλ λ± μκ°κ³Ό κ΄λ ¨λ λ§μ κΈ°λ₯μ μ κ³΅
8. react-native-keyboard-aware-scroll-view: ν€λ³΄λκ° νλ©΄μ κ°λ¦¬λ©°μ μκΈ°λ λΆνΈν μ μ ν΄κ²°ν  μ μλ κΈ°λ₯ μ κ³΅
9. react-native-gifted-chat: λ©μμ§λ₯Ό μ£Όκ³ λ°λ μ±ν νλ©΄μ μ½κ² κ΅¬νν  μ μλλ‘ λλ λΌμ΄λΈλ¬λ¦¬

<br />

## π App File Structure
![1](https://user-images.githubusercontent.com/64779472/114047660-cf11e300-98c4-11eb-9c6a-8a92a932eec3.PNG)

- components: μ»΄ν¬λνΈ νμΌ κ΄λ¦¬
- contexts: Context API νμΌ κ΄λ¦¬
- navigations: λ΄λΉκ²μ΄μ νμΌ κ΄λ¦¬
- screens: νλ©΄ νμΌ κ΄λ¦¬
- utils: νλ‘μ νΈμμ μ΄μ©ν  κΈ°ν κΈ°λ₯ κ΄λ¦¬

<br />

## π¨π»βπ» Firebase
π **https://console.firebase.google.com/**
- Firebaseλ μΈμ¦(Authentication), λ°μ΄ν°λ² μ΄μ€(Database) λ±μ λ€μν κΈ°λ₯μ μ κ³΅νλ κ°λ° νλ«νΌμ΄λ€.
- Firebaseκ° μ κ³΅νλ κΈ°λ₯μ μ΄μ©νλ©΄ λλΆλΆμ μλΉμ€μμ νμν μλ²μ λ°μ΄ν°λ² μ΄μ€λ₯Ό μ§μ  κ΅¬μΆνμ§ μμλ κ°λ°μ΄ κ°λ₯νλ€.

```javascript
    //Firebase Setting
    1. νλ‘μ νΈ μ€μ  > μΌλ° > λ΄ μ±μμ 'μΉ'μ μ ννκ³  μ±μ μΆκ°
    
    2. νλ‘μ νΈ μ€μ  > μΌλ° > λ΄ μ±μμ 'Firebase SDK snippet'μμ Firebase μ€μ κ°μ νμΈνλ€.

    3. νλ‘μ νΈ λ£¨νΈ λλ ν°λ¦¬μ firebase.json νμΌμ μμ± ν 2λ²μμ νμΈν μ½λλ₯Ό λ£λλ€.
         - firebase.jsonμ μ€μν νμΌμ΄κΈ° λλ¬Έμ .gitignoreμ μΆκ°νλ€.

    //firebase.json
    {
        "apiKey": "...",
        "authDomain": "...",
        "projectId": "...",
        "storageBucket": "...",
        "messagingSenderId": "...",
        "appId": "...",
        "measurementId": "..."
    }

    4. μΈμ¦, λ°μ΄ν°λ² μ΄μ€, μ€ν λ¦¬μ§ μ€μ νλ€.

    5. expo install firebase λ₯Ό ν΅ν΄ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ€μΉνλ€.

    6. firebase.js νμΌμ μμ±νλ€.

    //src/utils/firebase.js
    import * as firebase from "firebase";
    import config from "../../firebase.json";

    const app = firebase.initializeApp(config);
```

<br />

## π¨π»βπ» μ± μμ΄μ½κ³Ό λ‘λ© νλ©΄
- νλ‘μ νΈμμ μ¬μ©ν  μ΄λ―Έμ§μ ν°νΈλ₯Ό λ―Έλ¦¬ λΆλ¬μμ μ¬μ©ν  μ μλλ‘ cacheImages, cacheFonts ν¨μλ₯Ό μμ±νκ³  μ΄λ₯Ό _loadAssets ν¨μλ₯Ό κ΅¬μ±νλ€.
- μ΄λ―Έμ§λ ν°νΈλ₯Ό λ―Έλ¦¬ λΆλ¬μ€λ©΄ μ νλ¦¬μΌμ΄μμ μ¬μ©νλ νκ²½μ λ°λΌ μ΄λ―Έμ§λ ν°νΈκ° λλ¦¬κ² μ μ©λλ λ¬Έμ λ₯Ό κ°μ ν  μ μλ€.
- μ νλ¦¬μΌμμ λ―Έλ¦¬ λΆλ¬μμΌ νλ ν­λͺ©λ€μ λͺ¨λ λΆλ¬μ€κ³  νλ©΄μ΄ λ λλ§ λλλ‘ AppLoading μ»΄ν¬λνΈλ₯Ό μ¬μ©νλ€.

```javascript
    const cacheImages = (images) => {
        return images.map((image) => {
            if (typeof image === "string") {
                return Image.prefetch(image);
            } else {
                return Asset.fromModule(image).downloadAsync();
            }
          });
        };

    const cacheFonts = (fonts) => {
        return fonts.map((font) => Font.loadAsync(font));
    };

    const App = () => {
        (...)

    const _loadAssets = async () => {
        const imageAssets = cacheImages([
            require("../assets/splash.png"),
        ]);

        const fontAssets = cacheFonts([]);

        await Promise.all([...imageAssets, ...fontAssets]);
    };

    return isReady ? (
        (...)
    ) : (
        <AppLoading
            startAsync={_loadAssets}
            onFinish={() => setIsReady(true)}
            onError={console.error}
        />
      );
    };
```

<br />


## π¨π»βπ» λ‘κ³  μ μ©νκΈ°
- μ΄λ² μ νλ¦¬μΌμ΄μμ λ‘κ³ λ₯Ό Firebase μ€ν λ¦¬μ§μ μλ‘λνκ³  λ‘κ·ΈμΈ νλ©΄μμ μ¬μ©νλλ‘ λ§λ€μμ΅λλ€.
- μ€ν λ¦¬μ§μ νμΌμ μλ‘λνκ³  νμΌ μ λ³΄μμ μ΄λ¦μ ν΄λ¦­νλ©΄ ν΄λΉ νμΌμ urlμ μ»μ μ μμ΅λλ€.

```javascript
    //1. src/utils/images.js μμ±

    const prefix =
        "https://firebasestorage.googleapis.com/v0/b/react-native-chat-65246.appspot.com/o";

    export const images = {
        logo: `${prefix}/logo.png?alt=media`,
    };

    //2. src/App.js (_loadAssets λ©μλ μμ )

    const _loadAssets = async () => {
        const imageAssets = cacheImages([
            require("../assets/splash.png"),
            ...Object.values(images),
        ]);

        const fontAssets = cacheFonts([]);

        await Promise.all([...imageAssets, ...fontAssets]);
    };

    //3. Firebase μ€ν λ¦¬μ§ Rules μμ 

    rules_version = '2';
    service firebase.storage {
      match /b/{bucket}/o {
        match /logo.png {
          allow read;
        }
      }
    }
```

<br />

## π¨π»βπ» useRef, forwardRef
- useRefλ₯Ό μ΄μ©νμ¬ passwordRefλ₯Ό λ§λ€κ³  λΉλ°λ²νΈλ₯Ό μλ ₯νλ Input μ»΄ν¬λνΈμ refλ‘ μ§μ νμ΅λλ€. 
- μ΄λ©μΌμ μλ ₯νλ Input μ»΄ν¬λνΈμ onSubmitEditing ν¨μλ₯Ό passwordRef λ₯Ό μ΄μ©ν΄μ λΉλ°λ²νΈλ₯Ό μλ ₯νλ Input μ»΄ν¬λνΈλ‘ ν¬μ»€μ€κ° μ΄λλλλ‘ μμ±ν©λλ€.
- refλ keyμ²λΌ λ¦¬μ‘νΈμμ μμ μ»΄ν¬λνΈμ propsλ‘ μ λ¬λμ§ μμ΅λλ€. μ΄λ, forwardRef ν¨μλ₯Ό μ΄μ©νλ©΄ refλ₯Ό μ λ¬λ°μ μ μμ΅λλ€.

```javascript
const Input = forwardRef(
  (
    {
      (...)
    },
    ref
  ) => {
      
    return (
      <Container>
        (...)
        <StyledTextInput
          ref={ref}
          isFocused={isFocused}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }} //inputμ ν¬μ»€μ€κ° νλ¦΄λ νΈμΆλλ μ½λ°±
          placeholder={placeholder}
          secureTextEntry={isPassword} //λ¬Έμλ₯Ό κ°μΆλ κΈ°λ₯
          returnKeyType={returnKeyType} //λ¦¬ν΄ ν€λ₯Ό λ μ΄λΈλ‘ μ€μ 
          maxLength={maxLength} //μλ ₯ ν  μμλ μ΅λ λ¬Έμ μλ₯Ό μ ν
          autoCapitalize="none" //μλ λλ¬Έμ λ³ν
          autoCorrect={false} //μλ μμ 
          textContentType="none" //iOS
          underlineColorAndroid="transparent" //Android TextInput λ°μ€ μ μμ
        />
      </Container>
    );
  }
);
```

<br />

## π¨π»βπ» ν€λ³΄λ κ°μΆκΈ°
- TextInputμ μλ ₯ λμ€ λ€λ₯Έ κ³³μ ν°μΉνλ©΄ ν€λ³΄λκ° μ¬λΌμ§λλ°, μ΄λ μ¬μ©μ νΈμλ₯Ό μν μΌλ°μ μΈ μ νλ¦¬μΌμ΄μμ λμ₯ λ°©μμλλ€.
- λ¦¬μ‘νΈ λ€μ΄ν°λΈμμ **TouchableWithoutFeedback** μ»΄ν¬λνΈμ **Keyboard API**λ₯Ό μ¬μ©ν΄μ μ λμ₯ λ°©μμ κ΅¬νν  μ μμ΅λλ€.
- μμ λ μ»΄ν¬λνΈλ λμ , μμΉμ λ°λΌ ν€λ³΄λκ° Input μ»΄ν¬λνΈλ₯Ό κ°λ¦¬λ λ¬Έμ λ₯Ό ν΄κ²°νμ§λ λͺ»ν©λλ€.
- **react-native-keyboard-aware-scroll-view** λΌμ΄λΈλ¬λ¦¬λ₯Ό μ΄μ©νλ©΄ μ λ¬Έμ λ₯Ό ν΄κ²°ν  μ μμ΅λλ€. λΏλ§ μλλΌ focusκ° μλ TextInput μ»΄ν¬λνΈμ μμΉλ‘ μλ μ€ν¬λ‘€λλ κΈ°λ₯ λ± Input μ»΄ν¬λνΈμ νμν κΈ°λ₯λ€μ μ κ³΅ν©λλ€.

```javascript
  //import 
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

  <KeyboardAwareScrollView
    contentContainerStyle={{ flex: 1 }}
    extraScrollHeight={20} //μ€ν¬λ‘€λλ μμΉλ₯Ό μ‘°μ ν  λ μ¬μ©
  >
    (...)
  </KeyboardAwareScrollView>
```

<br />

## π¨π»βπ» μ΄λ©μΌ μ ν¨μ± κ²μ¬
```javascript
  //μ¬λ°λ₯Έ μ΄λ©μΌ νμ κ²μ¬
  export const validateEmail = (email) => {
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;

    return regex.test(email);
  };

  //κ³΅λ°± μ κ±°
  export const removeWhitespace = (text) => {
    const regex = /\s/g;
    return text.replace(regex, "");
  };
```
<br />

## π¨π»βπ» Button μ»΄ν¬λνΈ
- **TouchableOpacity**λ ν°μΉ μ΄λ²€νΈ(onPress)λ₯Ό μ¬μ©ν  μ μλ View

```javascript
  const Container = styled.TouchableOpacity`
    (...)
  `;
```

<br />

## π¨π»βπ» λΈμΉ λμμΈ
- react-native-safe-area-context λΌμ΄λΈλ¬λ¦¬κ° μ κ³΅νλ useSafeAreaInsets Hook ν¨μλ₯Ό μ΄μ©νλ©΄ λΈμΉλμμΈμ ν΄κ²°ν  μ μλ€.
- useSafeAreaInsetsμ μ₯μ μ iOSλΏλ§μλλΌ μλλ‘μ΄λμμλ μ μ© κ°λ₯ν padding κ°μ μ λ¬νλ€.

```javascript
  //import 
  import { useSafeAreaInsets } from "react-native-safe-area-context";

  //padding topκ³Ό bottomμ κ°μ useSafeAreaInsets ν¨μκ° μλ €μ£Όλ κ°λ§νΌ μ€μ νλ€.
  const Container = styled.View`
    (...)
    padding: 0 20px;
    padding-top: ${({ insets: { top } }) => top}px;
    padding-bottom: ${({ insets: { bottom } }) => bottom}px;
  `;
```

<br />

## π¨π»βπ» κΆν μμ²­, μ¬μ§μ μ λ³΄ κ°μ Έμ€κΈ°
### πκΆν μμ²­(iOS)
- expo-image-picker λΌμ΄λΈλ¬λ¦¬λ₯Ό ν΅ν΄μ κΈ°κΈ°μ μ¬μ§μ²©μ μ κ·Όν΄μ μ νλ μ¬μ§μ μ λ³΄λ₯Ό κ°μ Έμ¬ μ μλ€.
- iOSμμλ μ¬μ§μ²©μ μ κ·ΌνκΈ° μν΄ μ¬μ©μμκ² κΆνμ μμ²­νλ κ³Όμ μ΄ νμνλ―λ‘, κΆνμ μμ²­νλ λΆλΆμ μΆκ°ν΄μΌ νλ€. μλλ‘λμμλ νΉλ³ν μ€μ  μμ΄ μ¬μ§μ μ κ·Όν  μ μλ€.

```javascript
  //install
  expo install expo-image-picker

  //import 
  import * as ImagePicker from "expo-image-picker";
  import * as Permissions from "expo-permissions";

  //iOS κΆν μμ²­
  useEffect(() => {
    async () => {
      try {
        if (Platform.OS === "ios") {
          const { status } = await Permissions.askAsync(
            Permissions.CAMERA_ROLL
          );
          if (status !== "granted") {
            Alert.alert(
              "Photo Permission",
              "Please turn on the camera roll permissions"
            );
          }
        }
      } catch (e) {
        Alert.alert("Photo Permission Error", e.message);
      }
    };
  }, []);
```
<br />

### πμ¬μ§ μλ ₯λ°κΈ°
- μ¬μ§ λ³κ²½ λ²νΌμ ν΄λ¦­νλ©΄ νΈμΆλλ ν¨μμμ κΈ°κΈ°μ μ¬μ§μ μ κ·ΌνκΈ° μν΄ νΈμΆλλ λΌμ΄λΈλ¬λ¦¬ ν¨μλ λ€μκ³Ό κ°μ κ°λ€μ ν¬ν¨ν κ°μ²΄λ₯Ό νλΌλ―Έν°λ‘ μ λ¬λ°λλ€.
  1. mediaTypes: μ‘°ννλ μλ£μ νμ
  2. allowsEditing: μ΄λ―Έμ§ μ ν ν νΈμ§ λ¨κ³ μ§ν μ¬λΆ
  3. aspect: μλλ‘μ΄λ μ μ© μ΅μμΌλ‘ μ΄λ―Έμ§ νΈμ§μ μ¬κ°νμ λΉμ¨([x, y])
  4. quality: 0 ~ 1 μ¬μ΄μ κ°μ λ°μΌλ©° μμΆ νμ§μ μλ―Έ (1: μ΅λ νμ§)

```javascript
  const _handelEditButton = async () => {
      try {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        if (!result.cancelled) {
          onChangeImage(result.uri);
        }
      } catch (e) {
        Alert.alert("Photo Error", e.message);
      }
    };
```
<br />

- κΈ°κΈ°μ μ¬μ§μ μ κ·Όνλ ν¨μλ κ²°κ³Όλ₯Ό λ°ννλλ°, cancelled κ°μ ν΅ν΄ μ ν μ¬λΆλ₯Ό νμΈν  μ μλ€. λ§μ½ μ¬μ©μκ° μ¬μ§μ μ ννλ€λ©΄ λ°νλ κ²°κ³Όμ uriλ₯Ό ν΅ν΄ μ νλ μ¬μ§μ μ£Όμλ₯Ό μ μ μλ€.

```json
  //μλ¨μ resultμ λ°ν κ°
  {
    "cancelled": true,
  }

  {
    "cancelled": false,
    "height": 000,
    "type": "image",
    "uri": "file:../...jpg",
    "width": 000,
  }
```

<br />

## π¨π»βπ» λ‘κ·ΈμΈ, νμκ°μ κΈ°λ₯ κ΅¬ν
### π λ‘κ·ΈμΈ
- νμ΄μ΄λ² μ΄μ€λ₯Ό μ΄μ©ν μ΄λ©μΌκ³Ό λΉλ°λ²νΈλ₯Ό μ΄μ©ν΄ μΈμ¦λ°λ ν¨μλ  **signInWithEmailAndPassword** μλλ€.

```javascript
  //utils/firebase.js
  export const login = async ({ email, password }) => {
    const { user } = await Auth.signInWithEmailAndPassword(email, password);
    return user;
  };
```

<br />

```javascript
  //screens/Login.js
  import { login } from "../utils/firebase";

  const _handleLoginButtonPress = async () => {
    try {
      const user = await login({ email, password });
      Alert.alert("Login Success", user.email);
    } catch (e) {
      Alert.alert("Login Error", e.message);
    }
  };
```
<br />

### π νμκ°μ
- νμ΄μ΄λ² μ΄μ€λ₯Ό μ΄μ©ν μ΄λ©μΌκ³Ό λΉλ°λ²νΈλ₯Ό μ΄μ©ν΄ μ¬μ©μλ₯Ό μμ±νλ ν¨μλ **createUserWithEmailAndPassword** μλλ€.

```javascript
//utils/firebase.js

  export const signup = async ({ email, password, name, photoUrl }) => {
    const { user } = await Auth.createUserWithEmailAndPassword(email, password);
    return user;
  };
```
<br />

```javascript
  //screens/Signup.js
  import { signup } from "../utils/firebase";

  const _handleSignupButtonPress = async () => {
    try {
      const user = await signup({ email, password, name, photoUrl });
      console.log(user);
      Alert.alert("Signup Success", user.email);
    } catch (e) {
      Alert.alert("Signup Error", e.message);
    } 
  };
```

<br />

## π¨π»βπ» Spinner(with ContextAPI)
### π Spinner Component
- Spinner μ»΄ν¬λνΈλ λ‘κ·ΈμΈ νΉμ νμκ°μμ΄ μ§νλλ λμ λ°μ΄ν°λ₯Ό μμ νκ±°λ λ²νΌμ μΆκ°λ‘ ν΄λ¦­νλ μΌμ΄ λ°μνμ§ μλλ‘ λ°©μ§νλ κΈ°λ₯μ νλ€.
- Spinner μ»΄ν¬λνΈλ λ¦¬μ‘νΈ λ€μ΄ν°λΈμμ μ κ³΅νλ **AcitivityIndicator** μ»΄ν¬λνΈλ₯Ό μ΄μ©ν΄μ μ½κ² λ§λ€ μ μλ€.
- Spinner μ»΄ν¬λνΈλ₯Ό AuthStack λ΄λΉκ²μ΄μμ νμ μ»΄ν¬λνΈλ‘ μ¬μ©νλ©΄ λ΄λΉκ²μ΄μμ ν¬ν¨ν νλ©΄ μ μ²΄λ₯Ό μ°¨μ§ν  μ μμ΅λλ€. λ΄λΉκ²μ΄μμ ν¬ν¨ν νλ©΄ μ μ²΄λ₯Ό κ°μΈκΈ° μν΄μλ navigations ν΄λμ index.jsμμ AuthStack λ΄λΉκ²μ΄μκ³Ό κ°μ μμΉμ Spinner μ»΄ν¬λνΈλ₯Ό μ¬μ©ν΄μΌ λ©λλ€.

```javascript
  import React, { useContext } from 'react';
  import { ActivityIndicator } from 'react-native';
  import styled, { ThemeContext } from 'styled-components/native';

  const Container = styled.View`
    (...)
  `;

  const Spinner = () => {
      const theme = useContext(ThemeContext);
      return (
          <Container>
              <ActivityIndicator size={'large'} color={theme.spinnerIndicator} />
          </Container>
      )
  };

  export default Spinner;
```
<br />

- Spinner μ»΄ν¬λνΈλ₯Ό AuthStack λ΄λΉκ²μ΄μμ νμ μ»΄ν¬λνΈλ‘ μ¬μ©νλ©΄ λ΄λΉκ²μ΄μμ ν¬ν¨ν νλ©΄ μ μ²΄λ₯Ό μ°¨μ§ν  μ μμ΅λλ€. λ΄λΉκ²μ΄μμ ν¬ν¨ν νλ©΄ μ μ²΄λ₯Ό κ°μΈκΈ° μν΄μλ navigations ν΄λμ index.jsμμ AuthStack λ΄λΉκ²μ΄μκ³Ό κ°μ μμΉμ Spinner μ»΄ν¬λνΈλ₯Ό μ¬μ©ν΄μΌ λ©λλ€.

```javascript
  (...)
  const Navigation = () => {
    const { inProgress } = useContext(ProgressContext);

    return (
      <NavigationContainer>
        <AuthStack />
        {inProgress && <Spinner />}
      </NavigationContainer>
    );
  };
  (...)
```
<br />

### π Context API
- createContext ν¨μλ₯Ό μ΄μ©ν΄ Contextλ₯Ό μμ±νκ³ , Provider μ»΄ν¬λνΈμ valueμ Spinner μ»΄ν¬λνΈμ λ λλ§ μνλ₯Ό κ΄λ¦¬ν  inPrgress μν λ³μμ μνλ₯Ό λ³κ²½ν  μ μλ ν¨μλ₯Ό μ λ¬ν©λλ€.

```javascript
  //contexts/Progress.js

  import React, { useState, createContext } from 'react';

  //Context μμ±
  const ProgressContext = createContext({
    inProgress: false,
    spinner: () => {},
  });

  //ProgressProvider
  const ProgressProvider = ({ children }) => {
    const [inProgress, setInProgress] = useState(false);

    const spinner = {
      start: () => setInProgress(true),
      stop: () => setInProgress(false),
    };
    const value = { inProgress, spinner };

    return (
      <ProgressContext.Provider value={value}>
          {children}
      </ProgressContext.Provider>
    );
  };

  export { ProgressContext, ProgressProvider };
```
<br />

```javascript
  //contexts/index.js
  import {ProgressContext, ProgressProvider } from './Progress';
  export { ProgressContext, ProgressProvider }; 
```
<br />

```javascript
  //src/App.js
  <ThemeProvider theme={theme}>
    <ProgressProvider>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </ProgressProvider>
  </ThemeProvider>
```

<br />

## π¨π»βπ» Stack λ΄λΉκ²μ΄μ μ Tab λ΄λΉκ²μ΄μμ ν€λ λ³κ²½
- MainStack λ΄λΉκ²μ΄μμμ MainTab λ΄λΉκ²μ΄μμ΄ νλ©΄μΌλ‘ μ¬μ©λλ Screen μ»΄ν¬λνΈμ nameμ "Main"μΌλ‘ μ€μ λμ΄ μλ€. ν€λμ νμ΄νκ³Ό κ΄λ ¨ν΄ νΉλ³ν μ€μ νμ§ μμΌλ©΄ Screen μ»΄ν¬λνΈμ nameμ μ€μ λ κ°μ΄ ν€λμ νμ΄νλ‘ λκΈ° λλ¬Έμ, νλ‘ν νλ©΄κ³Ό μ±λ λͺ©λ‘ λͺ¨λ 'Main'μΌλ‘ νμ΄νμ΄ λνλλ€.
```javascript
  <Stack.Navigator
    initialRouteName="Main"
    (...)
  >   
    <Stack.Screen name="Main" component={MainTab} />
    (...)
  </Stack.Navigator>
```
<br />

- MainTab λ΄λΉκ²μ΄μμ MainStack λ΄λΉκ²μ΄μμ νλ©΄μΌλ‘ μ¬μ©λμκΈ° λλ¬Έμ λ€λ₯Έ νλ©΄λ€κ³Ό λ§μ°¬κ°μ§λ‘ propsλ₯Ό ν΅ν΄ navigationκ³Ό routeλ₯Ό μ λ¬ λ°λλ€.
- routeμ ν¬ν¨λ stateμ κ°μ λ€μκ³Ό κ°λ€
  1. index: νμ¬ λ λλ§ λλ νλ©΄μ μΈλ±μ€
  2. routeNames: νλ©΄μΌλ‘ μ¬μ©λλ Navigator μ»΄ν¬λνΈμμ Screen μ»΄ν¬λνΈλ€μ name μμ±μ λ°°μ΄λ‘ κ°λλ€.
  3. type: νμ¬ νλ©΄μΌλ‘ μ¬μ©λλ Navigator μ»΄ν¬λνΈμ νμμ΄λ©°, MainTab λ΄λΉκ²μ΄μμ ν­ λ΄λΉκ²μ΄μμ΄κΈ° λλ¬Έμ 'tab' κ°μ κ°λλ€.

```json
  //routeμ state
  {
    "index": 0,
    "routeNames": [
      "Channel List",
      "Profile",
    ],
    "type": "tab",
    ...
  }
```
<br />

```javascript
  //MainTab
  useEffect(() => {
    const titles = route.state?.routeNames || ['Channels'];
    const index = route.state?.index || 0;
    navigation.setOptions({ headerTitle: titles[index ]});
  }, [route]);
```

<br />

- νμ§λ§ μμ λ°©μλλ‘ νλ©΄ routeμ stateμ μ§μ  μ κ·Όν΄μ λ°μνλ κ²½κ³ λ©μμ§κ° λ¬λ€. μ΄κ±Έ ν΄κ²°νλ €λ©΄ **getFocusedRouteNameFromRoute** λ©μλλ₯Ό μ¬μ©νλ©΄ λλ€.
- π κ΄λ ¨ μ΄μ: https://github.com/Alchemist85K/my-first-react-native/discussions/26

```javascript
  useEffect(() => {
      const screenName = getFocusedRouteNameFromRoute(route) || 'Channels';

      navigation.setOptions({ 
        headerTitle: screenName,
      });
  }, [route]);
```

<br />

## π¨π»βπ» Setting a timer for a long period of time, ... μ€λ₯
- π κ΄λ ¨ μ΄μ: https://github.com/Alchemist85K/my-first-react-native/discussions/28
- /node_modules/react-native/Libraries/Core/Timers/JSTimers.js
- MAX_TIMER_DURATION_MS λΌλ λ³μ κ°μ 60 * 1000 μμ 10000 * 1000μΌλ‘ λ³κ²½

<br />

## π¨π»βπ» λ°μ΄ν°λ² μ΄μ€
- νμ΄μ΄λ² μ΄μ€μμ μ κ³΅νλ νμ΄μ΄μ€ν μ΄λ NoSQL λ¬Έμ μ€μ¬μ λ°μ΄ν°λ² μ΄μ€μ΄λ€.
- SQL λ°μ΄ν°λ² μ΄μ€μ λ¬λ¦¬ νμ΄λΈμ΄λ νμ΄ μκ³  μ»¬λ μ, λ¬Έμ, νλλ‘ κ΅¬μ±λλ€.
  1. μ»¬λ μμ λ¬Έμμ μ»¨νμ΄λ μ­ν μ νλ©°, λͺ¨λ  λ¬Έμλ ν­μ μ»¬λ μμ μ μ₯λλ€.
  2. λ¬Έμλ νμ΄μ΄μ€ν μ΄μ μ μ₯ λ¨μλ‘ κ°μ΄ μλ νλλ₯Ό κ°λλ€. λ¬Έμμ κ°μ₯ ν° νΉμ§μ μ»¬λ μμ νλλ‘ κ°μ§ μ μλ€.
- νμ΄μ΄μ€ν μ΄λ μΌλ°μ μΈ λ°μ΄ν°λ² μ΄μ€μ λ¬λ¦¬ λ°μ΄ν°λ² μ΄μ€μ λ΄μ©μ΄ μμ λλ©΄ μ€μκ°μΌλ‘ λ³κ²½λ λ΄μ©μ μ μ μλ€.
- μ»¬λ μκ³Ό λ¬Έμλ ν­μ μ μΌν IDλ₯Ό κ°κ³  μμ΄μΌ νλ€λ κ·μΉμ΄ μλ€.

![1](https://user-images.githubusercontent.com/64779472/114672004-a44de180-9d3f-11eb-9646-eaa072f40f2c.PNG)

```
  //νμ΄μ΄μ€ν μ΄ λ³΄μ κ·μΉ μμ 
  rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /channels/{channel} {
          allow read, write: if request.auth.uid != null;
        }
      }
    }
```

<br />

## π¨π»βπ» FlatList
- μ§κΈκΉμ§ λ§μ μμ λ°μ΄ν°λ₯Ό λ λλ§ν  λ ScrollView μ»΄ν¬λνΈλ₯Ό μ΄μ©ν΄ νλ©΄μ΄ λμ΄κ°λλ‘ μ€ν¬λ‘€μ΄ μμ±λμ΄ νμΈν  μ μλλ‘ λ§λ€μμ΅λλ€.
- FlatListμ»΄ν¬λνΈλ ScrollView μ»΄ν¬λνΈμ κ°μ μ­ν μ νλλ°, ScrollView μ»΄ν¬λνΈλ λ λλ§ν΄μΌ νλ λͺ¨λ  λ°μ΄ν°λ₯Ό νλ²μ λ λλ§ν©λλ€. μ¦, λ°μ΄ν°μ μμ μκ³  μμ λ μ¬μ©νλ κ²μ΄ μ’κ³ , λ°μ΄ν°κ° λ§€μ° λ§μΌλ©΄ λ λλ§ μλκ° λλ €μ§κ³  λ©λͺ¨λ¦¬ μ¬μ©λμ΄ μ¦κ°νλ λ± μ±λ₯μ΄ μ νλ©λλ€.
- κ·Έμλ°ν΄, FlatListλ νλ©΄μ μ μ ν μμ λ°μ΄ν°λ§ λ λλ§νκ³  μ€ν¬λ‘€μ μ΄λμ λ§μΆ° νμν λΆλΆμ μΆκ°μ μΌλ‘ λ λλ§νλ νΉμ§μ΄ μμ΅λλ€.
- FlatListμλ κΈ°λ³Έμ μΌλ‘ 3κ°μ§ μμ±μ΄ μμ΅λλ€.
  1. data: μ²μ λ λλ§ν  ν­λͺ©μ λ°μ΄ν°λ₯Ό λ°°μ΄λ‘ μ λ¬νλ€.
  2. renderItem: μ λ¬λ λ°°μ΄μ ν­λͺ©μ μ΄μ©ν΄ λ λλ§νλ ν¨μλ₯Ό μμ±ν΄μΌ νλ€.
  3. keyExtractor: keyλ₯Ό μΆκ°νκΈ° μν΄ κ³ μ ν κ°μ λ°ννλ ν¨μλ₯Ό μ λ¬ν΄μΌ νλ€.
  
<br />

```js
  <FlatList
    keyExtractor={item => item['id'].toString()}
    data={channels}
    renderItem={({ item }) => {
        return (
            <Item item={item} onPress={_handleItemPress} />
        )
    }}
    windowSize={3}
  />
```

<br />

### π windowSize
- FlatListμμ λ λλ§ λλ λ°μ΄ν°μ μμ μ‘°μ νκ³  μΆλ€λ©΄ windowSize μμ±μ μΆκ°ν΄μ κ°μ μνλ κ°μΌλ‘ μ€μ νλ©΄ λλ€. 
- windowSizeμ κ°μ μμ κ°μΌλ‘ λ³κ²½νλ©΄ λ λλ§λλ λ°μ΄ν°κ° μ€μ΄λ€μ΄ λ©λͺ¨λ¦¬μ μλΉλ₯Ό μ€μ΄κ³  μ±λ₯μ ν₯μ μν¬ μ μμ§λ§, λΉ λ₯΄κ² μ€ν¬λ‘€νλ μν©μμ λ―Έλ¦¬ λ λλ§λμ§ μμ λΆλΆμ μκ°μ μΌλ‘ λΉ λ΄μ©μ΄ λνλ  μ μλ€λ λ¨μ μ΄ μλ€.

<br />

```js
  <FlatList
    (...)
    windowSize={3}
  />
```

<br />

### π React.Memo
- React.Memoλ useMemo Hook ν¨μμ λΉμ·νμ§λ§, λΆνμν ν¨μμ μ¬μ°μ°μ λ°©μ§νλ useMemoμ λ¬λ¦¬ μ»΄ν¬λνΈμ λ¦¬λ λλ§μ λ°©μ§νλ€λ μ°¨μ΄κ° μλ€.
- React.Memoλ μ»΄ν¬λνΈλ₯Ό κ°μΈλ κ²μΌλ‘ κ°λ¨ν μ μ©ν  μ μλ€.
- React.Memoλ₯Ό μ¬μ©νλ©΄ Item μ»΄ν¬λνΈλ propsκ° λ³κ²½λ  λκΉμ§ λ¦¬λ λλ§λμ§ μλλ€.

<br />

```js
const Item = React.memo(({ item: { id, title, description, createdAt }, onPress }) => {
  const theme = useContext(ThemeContext);
  console.log(`Item ${id}`);

  return (
    <ItemContainer onPress={() => onPress({ id, title })}>
        <ItemTextContainer>
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
        </ItemTextContainer>
        <ItemTime>{createdAt}</ItemTime>
        <MaterialIcons 
            name="keyboard-arrow-right"
            size={24}
            color={theme.listIcon}
        />
    </ItemContainer>
  );
```

<br />

## π¨π»βπ» μ±λ λ°μ΄ν° μμ 
- firebaseμ Cloud Firestoreμμ μ€μκ° λ°μ΄ν°λ₯Ό λ°μμ€κΈ° μν΄μλ onSnapshop λ©μλλ₯Ό μ΄μ©νμ¬ λ°μ΄ν°λ₯Ό μμ ν  μ μμ΅λλ€.
- **onSnapshop** λ©μλλ μμ  λκΈ° μνλ‘ μλ€κ° λ°μ΄ν°λ² μ΄μ€μ λ¬Έμκ° μΆκ°λκ±°λ μμ λ  λλ§λ€ μ§μ λ ν¨μκ° νΈμΆλ©λλ€.
- μ΄λ, μ€λ¦μ°¨μ, λ΄λ¦Όμ°¨μμ **orderBy** λ©μλλ₯Ό μ΄μ©ν΄μ ν  μ μμ΅λλ€.

<br />

```js
  useEffect(() => {
    const unsubscribe = DB.collection('channels')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const list = [];

        snapshot.forEach(doc => {
          list.push(doc.data());
        });
        setChannels(list);
      });

    return () => unsubscribe();
  }, []);
```

<br />

## π¨π»βπ» react-native-gifted-chat
- μ±ν νλ©΄μμ μ¬μ©ν  μ μλ κΈ°λ₯μ λ€μνκ² μ κ³΅νλ react-native-gifted-chat λΌμ΄λΈλ¬λ¦¬
- react-native-gifted-chat λΌμ΄λΈλ¬λ¦¬μ GiftedChat μ»΄ν¬λνΈλ λ€μν μ€μ μ΄ κ°λ₯νλλ‘ λ§μ μμ±μ μ κ³΅νλ€.
  1. μλ ₯λ λ΄μ©μ μ€μ λ μ¬μ©μμ μ λ³΄ λ° μλμΌλ‘ μμ±λ IDμ ν¨κ» μ λ¬ νλ κΈ°λ₯
  2. μ μ‘ λ²νΌμ μμ νλ κΈ°λ₯
  3. μ€ν¬λ‘€μ μμΉμ λ°λΌ μ€ν¬λ‘€ μμΉλ₯Ό λ³κ²½νλ λ²νΌ λ λλ§

<br />

```js
  <Container>
    <GiftedChat
      listViewProps={{
        style: { backgroundColor: theme.background },
      }}
      placeholder="Enter a Message"
      messages={messages}
      user={{ _id: uid, name, avatar: photoUrl }}
      onSend={_handleMessageSend}
      alwaysShowSend={true}
      textInputProps={{
        autoCapitalize: "none",
        autoCorrect: false,
        textContentType: "none",
        underlineColorAndroid: "transparent",
      }}
      multiline={false}
      renderUsernameOnMessage={true}
      scrollToBottom={true}
      renderSend={(props) => <SendButton {...props} />}
    />
  </Container>
```

<br />

- userμ λ€μκ³Ό κ°μ ννλ‘ μ¬μ©μμ μ λ³΄λ₯Ό μλ ₯ν΄λλ©΄ onSendμ μ μν ν¨μκ° νΈμΆλ  λ μλ ₯λ λ©μμ§μ μ¬μ©μμ μ λ³΄λ₯Ό ν¬ν¨ν κ°μ²΄λ₯Ό μ λ¬νλ€.

```
  User {
    _id: string | number;
    name: string;
    avatar: string | renderFunction;
  }
```

<br />

```
  Message {
    _id: string | number;
    text: string;
    createdAt: Date | number;
    user: User;
    ...
  }
```

<br />