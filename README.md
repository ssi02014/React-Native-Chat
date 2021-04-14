# 💻 React-Native-Chat
### React-Native-Chat 저장소

<br />

## 🎥 App View
<!-- <p align='center'>
    <img src='' width="400" height="730">
</p> -->

<br />

## 📚 기술 스택 및 주요 라이브러리
1. React-Native
2. Styled-Components: Styling
3. Google Material Design: Icon
4. React-Navigation(Stack, Tab)
5. Context API: 상태 관리
6. Firebase: 서비스에 필요한 서버와 데이터베이스를 직접 구축하지 않고 개발이 가능한 개발 플랫폼
6. expo-image-picker: 기기의 사진이나 영상을 가져올 수 있도록 시스템 UI에 접근할 수 있는 기능을 제공
7. moment: 시간을 다양한 형태로 변경하는 등 시간과 관련된 많은 기능을 제공
8. react-native-keyboard-aware-scroll-view: 키보드가 화면을 가리며서 생기는 불편한 점을 해결할 수 있는 기능 제공
9. react-native-gifted-chat: 메시지를 주고받는 채팅 화면을 쉽게 구현할 수 있도록 돕는 라이브러리

<br />

## 📂 App File Structure
![1](https://user-images.githubusercontent.com/64779472/114047660-cf11e300-98c4-11eb-9c6a-8a92a932eec3.PNG)

- components: 컴포넌트 파일 관리
- contexts: Context API 파일 관리
- navigations: 내비게이션 파일 관리
- screens: 화면 파일 관리
- utils: 프로젝트에서 이용할 기타 기능 관리

<br />

## 👨🏻‍💻 Firebase
🔖 **https://console.firebase.google.com/**
- Firebase는 인증(Authentication), 데이터베이스(Database) 등의 다양한 기능을 제공하는 개발 플랫폼이다.
- Firebase가 제공하는 기능을 이용하면 대부분의 서비스에서 필요한 서버와 데이터베이스를 직접 구축하지 않아도 개발이 가능하다.

```javascript
    //Firebase Setting
    1. 프로젝트 설정 > 일반 > 내 앱에서 '웹'을 선택하고 앱을 추가
    
    2. 프로젝트 설정 > 일반 > 내 앱에서 'Firebase SDK snippet'에서 Firebase 설정값을 확인한다.

    3. 프로젝트 루트 디렉터리에 firebase.json 파일을 생성 후 2번에서 확인한 코드를 넣는다.
         - firebase.json은 중요한 파일이기 때문에 .gitignore에 추가한다.

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

    4. 인증, 데이터베이스, 스토리지 설정한다.

    5. expo install firebase 를 통해 라이브러리를 설치한다.

    6. firebase.js 파일을 생성한다.

    //src/utils/firebase.js
    import * as firebase from "firebase";
    import config from "../../firebase.json";

    const app = firebase.initializeApp(config);
```

<br />

## 👨🏻‍💻 앱 아이콘과 로딩 화면
- 프로젝트에서 사용할 이미지와 폰트를 미리 불러와서 사용할 수 있도록 cacheImages, cacheFonts 함수를 작성하고 이를 _loadAssets 함수를 구성했다.
- 이미지나 폰트를 미리 불러오면 애플리케이션을 사용하는 환경에 따라 이미지나 폰트가 느리게 적용되는 문제를 개선할 수 있다.
- 애플리케션은 미리 불러와야 하는 항목들을 모두 불러오고 화면이 렌더링 되도록 AppLoading 컴포넌트를 사용한다.

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


## 👨🏻‍💻 로고 적용하기
- 이번 애플리케이션의 로고를 Firebase 스토리지에 업로드하고 로그인 화면에서 사용하도록 만들었습니다.
- 스토리지에 파일을 업로드하고 파일 정보에서 이름을 클릭하면 해당 파일의 url을 얻을 수 있습니다.

```javascript
    //1. src/utils/images.js 생성

    const prefix =
        "https://firebasestorage.googleapis.com/v0/b/react-native-chat-65246.appspot.com/o";

    export const images = {
        logo: `${prefix}/logo.png?alt=media`,
    };

    //2. src/App.js (_loadAssets 메서드 수정)

    const _loadAssets = async () => {
        const imageAssets = cacheImages([
            require("../assets/splash.png"),
            ...Object.values(images),
        ]);

        const fontAssets = cacheFonts([]);

        await Promise.all([...imageAssets, ...fontAssets]);
    };

    //3. Firebase 스토리지 Rules 수정

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

## 👨🏻‍💻 useRef, forwardRef
- useRef를 이용하여 passwordRef를 만들고 비밀번호를 입력하는 Input 컴포넌트의 ref로 지정했습니다. 
- 이메일을 입력하는 Input 컴포넌트의 onSubmitEditing 함수를 passwordRef 를 이용해서 비밀번호를 입력하는 Input 컴포넌트로 포커스가 이동되도록 작성합니다.
- ref는 key처럼 리액트에서 자식 컴포넌트의 props로 전달되지 않습니다. 이때, forwardRef 함수를 이용하면 ref를 전달받을 수 있습니다.

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
          }} //input에 포커스가 풀릴때 호출되는 콜백
          placeholder={placeholder}
          secureTextEntry={isPassword} //문자를 감추는 기능
          returnKeyType={returnKeyType} //리턴 키를 레이블로 설정
          maxLength={maxLength} //입력 할 수있는 최대 문자 수를 제한
          autoCapitalize="none" //자동 대문자 변환
          autoCorrect={false} //자동 수정
          textContentType="none" //iOS
          underlineColorAndroid="transparent" //Android TextInput 밑줄 의 색상
        />
      </Container>
    );
  }
);
```

<br />

## 👨🏻‍💻 키보드 감추기
- TextInput에 입력 도중 다른 곳을 터치하면 키보드가 사라지는데, 이는 사용자 편의를 위한 일반적인 애플리케이션의 동장 방식입니다.
- 리액트 네이티브에서 **TouchableWithoutFeedback** 컴포넌트와 **Keyboard API**를 사용해서 위 동장 방식을 구현할 수 있습니다.
- 위에 두 컴포넌트는 대신, 위치에 따라 키보드가 Input 컴포넌트를 가리는 문제를 해결하지는 못합니다.
- **react-native-keyboard-aware-scroll-view** 라이브러리를 이용하면 위 문제를 해결할 수 있습니다. 뿐만 아니라 focus가 있는 TextInput 컴포넌트의 위치로 자동 스크롤되는 기능 등 Input 컴포넌트에 필요한 기능들을 제공합니다.

```javascript
  //import 
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

  <KeyboardAwareScrollView
    contentContainerStyle={{ flex: 1 }}
    extraScrollHeight={20} //스크롤되는 위치를 조정할 때 사용
  >
    (...)
  </KeyboardAwareScrollView>
```

<br />

## 👨🏻‍💻 이메일 유효성 검사
```javascript
  //올바른 이메일 형식 검사
  export const validateEmail = (email) => {
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;

    return regex.test(email);
  };

  //공백 제거
  export const removeWhitespace = (text) => {
    const regex = /\s/g;
    return text.replace(regex, "");
  };
```
<br />

## 👨🏻‍💻 Button 컴포넌트
- **TouchableOpacity**는 터치 이벤트(onPress)를 사용할 수 있는 View

```javascript
  const Container = styled.TouchableOpacity`
    (...)
  `;
```

<br />

## 👨🏻‍💻 노치 디자인
- react-native-safe-area-context 라이브러리가 제공하는 useSafeAreaInsets Hook 함수를 이용하면 노치디자인을 해결할 수 있다.
- useSafeAreaInsets의 장점은 iOS뿐만아니라 안드로이드에서도 적용 가능한 padding 값을 전달한다.

```javascript
  //import 
  import { useSafeAreaInsets } from "react-native-safe-area-context";

  //padding top과 bottom의 값을 useSafeAreaInsets 함수가 알려주는 값만큼 설정한다.
  const Container = styled.View`
    (...)
    padding: 0 20px;
    padding-top: ${({ insets: { top } }) => top}px;
    padding-bottom: ${({ insets: { bottom } }) => bottom}px;
  `;
```

<br />

## 👨🏻‍💻 권한 요청, 사진의 정보 가져오기
### 🏃권한 요청(iOS)
- expo-image-picker 라이브러리를 통해서 기기의 사진첩에 접근해서 선택된 사진의 정보를 가져올 수 있다.
- iOS에서는 사진첩에 접근하기 위해 사용자에게 권한을 요청하는 과정이 필요하므로, 권한을 요청하는 부분을 추가해야 한다. 안드로드에서는 특별한 설정 없이 사진에 접근할 수 있다.

```javascript
  //install
  expo install expo-image-picker

  //import 
  import * as ImagePicker from "expo-image-picker";
  import * as Permissions from "expo-permissions";

  //iOS 권한 요청
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

### 🏃사진 입력받기
- 사진 변경 버튼을 클릭하면 호출되는 함수에서 기기의 사진에 접근하기 위해 호출되는 라이브러리 함수는 다음과 같은 값들을 포함한 객체를 파라미터로 전달받는다.
  1. mediaTypes: 조회하는 자료의 타입
  2. allowsEditing: 이미지 선택 후 편집 단계 진행 여부
  3. aspect: 안드로이드 전용 옵션으로 이미지 편집시 사각형의 비율([x, y])
  4. quality: 0 ~ 1 사이의 값을 받으며 압축 품질을 의미 (1: 최대 품질)

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

- 기기의 사진에 접근하는 함수는 결과를 반환하는데, cancelled 값을 통해 선택 여부를 확인할 수 있다. 만약 사용자가 사진을 선택했다면 반환된 결과의 uri를 통해 선택된 사진의 주소를 알 수 있다.

```json
  //상단에 result의 반환 값
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

## 👨🏻‍💻 로그인, 회원가입 기능 구현
### 🏃 로그인
- 파이어베이스를 이용한 이메일과 비밀번호를 이용해 인증받는 함수는  **signInWithEmailAndPassword** 입니다.

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

### 🏃 회원가입
- 파이어베이스를 이용한 이메일과 비밀번호를 이용해 사용자를 생성하는 함수는 **createUserWithEmailAndPassword** 입니다.

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

## 👨🏻‍💻 Spinner(with ContextAPI)
### 🏃 Spinner Component
- Spinner 컴포넌트는 로그인 혹은 회원가입이 진행되는 동안 데이터를 수정하거나 버튼을 추가로 클릭하는 일이 발생하지 않도록 방지하는 기능을 한다.
- Spinner 컴포넌트는 리액트 네이티브에서 제공하는 **AcitivityIndicator** 컴포넌트를 이용해서 쉽게 만들 수 있다.
- Spinner 컴포넌트를 AuthStack 내비게이션의 하위 컴포넌트로 사용하면 내비게이션을 포함한 화면 전체를 차지할 수 없습니다. 내비게이션을 포함한 화면 전체를 감싸기 위해서는 navigations 폴더의 index.js에서 AuthStack 내비게이션과 같은 위치에 Spinner 컴포넌트를 사용해야 됩니다.

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

- Spinner 컴포넌트를 AuthStack 내비게이션의 하위 컴포넌트로 사용하면 내비게이션을 포함한 화면 전체를 차지할 수 없습니다. 내비게이션을 포함한 화면 전체를 감싸기 위해서는 navigations 폴더의 index.js에서 AuthStack 내비게이션과 같은 위치에 Spinner 컴포넌트를 사용해야 됩니다.

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

### 🏃 Context API
- createContext 함수를 이용해 Context를 생성하고, Provider 컴포넌트의 value에 Spinner 컴포넌트의 렌더링 상태를 관리할 inPrgress 상태 변수와 상태를 변경할 수 있는 함수를 전달합니다.

```javascript
  //contexts/Progress.js

  import React, { useState, createContext } from 'react';

  //Context 생성
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

## 👨🏻‍💻 Stack 내비게이션 속 Tab 내비게이션의 헤더 변경
- MainStack 내비게이션에서 MainTab 내비게이션이 화면으로 사용되는 Screen 컴포넌트의 name은 "Main"으로 설정되어 있다. 헤더의 타이틀과 관련해 특별히 설정하지 않으면 Screen 컴포넌트의 name에 설정된 값이 헤더의 타이틀로 되기 때문에, 프로필 화면과 채널 목록 모두 'Main'으로 타이틀이 나타난다.
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

- MainTab 내비게이션은 MainStack 내비게이션의 화면으로 사용되었기 때문에 다른 화면들과 마찬가지로 props를 통해 navigation과 route를 전달 받는다.
- route에 포함된 state의 값은 다음과 같다
  1. index: 현재 렌더링 되는 화면의 인덱스
  2. routeNames: 화면으로 사용되는 Navigator 컴포넌트에서 Screen 컴포넌트들의 name 속성을 배열로 갖는다.
  3. type: 현재 화면으로 사용되는 Navigator 컴포넌트의 타입이며, MainTab 내비게이션은 탭 내비게이션이기 때문에 'tab' 값을 갖는다.

```json
  //route의 state
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

- 하지만 위에 방식대로 하면 route의 state에 직접 접근해서 발생하는 경고메시지가 뜬다. 이걸 해결하려면 **getFocusedRouteNameFromRoute** 메서드를 사용하면 된다.
- 🔖 관련 이슈: https://github.com/Alchemist85K/my-first-react-native/discussions/26

```javascript
  useEffect(() => {
      const screenName = getFocusedRouteNameFromRoute(route) || 'Channels';

      navigation.setOptions({ 
        headerTitle: screenName,
      });
  }, [route]);
```

<br />

## 👨🏻‍💻 Setting a timer for a long period of time, ... 오류
- 🔖 관련 이슈: https://github.com/Alchemist85K/my-first-react-native/discussions/28
- /node_modules/react-native/Libraries/Core/Timers/JSTimers.js
- MAX_TIMER_DURATION_MS 라는 변수 값을 60 * 1000 에서 10000 * 1000으로 변경

<br />

## 👨🏻‍💻 데이터베이스
- 파이어베이스에서 제공하는 파이어스토어는 NoSQL 문서 중심의 데이터베이스이다.
- SQL 데이터베이스와 달리 테이블이나 행이 없고 컬렉션, 문서, 필드로 구성된다.
  1. 컬렉션은 문서의 컨테이너 역할을 하며, 모든 문서는 항상 컬렉션에 저장된다.
  2. 문서는 파이어스토어의 저장 단위로 값이 있는 필드를 갖는다. 문서의 가장 큰 특징은 컬렉션을 필드로 가질 수 있다.
- 파이어스토어는 일반적인 데이터베이스와 달리 데이터베이스의 내용이 수정되면 실시간으로 변경된 내용을 알 수 있다.
- 컬렉션과 문서는 항상 유일한 ID를 갖고 있어야 한다는 규칙이 있다.

![1](https://user-images.githubusercontent.com/64779472/114672004-a44de180-9d3f-11eb-9646-eaa072f40f2c.PNG)

```
  //파이어스토어 보안 규칙 수정
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

🔖

### 🏃
