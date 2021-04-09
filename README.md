# 💻 React-Native-TodoApp
### React-Native-TodoApp 저장소

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

🔖

### 🏃
