# nude-gimbap

## backend

```bash

```

## frontend

### 1. application
`application` 폴더는 주로 애플리케이션의 주요 로직과 상태 관리를 담당하는 모듈들을 포함하고 있습니다.

- **hooks**: 커스텀 훅을 정의하는 디렉토리입니다.
  - **api**: API 관련 훅들을 정의합니다.
  - **common**: 공통으로 사용되는 훅들을 정의합니다.
  - **logics**: 특정 로직을 처리하는 훅들을 정의합니다.
- **store**: 상태 관리를 위한 저장소 관련 모듈들을 포함합니다.

### 2. infrastructure
`infrastructure` 폴더는 외부 서비스와의 통신, 클라이언트 설정 등 인프라 관련 모듈들을 포함합니다.

- **api**: 서버 API와 통신하는 모듈들을 포함합니다.
- **client**: 클라이언트 설정 및 초기화 관련 모듈들을 포함합니다.
- **helper**: 여러 곳에서 사용될 수 있는 헬퍼 함수들을 포함합니다.
  - **array**: 배열 관련 헬퍼 함수들을 정의합니다.
  - **string**: 문자열 관련 헬퍼 함수들을 정의합니다.
  - **url**: URL 관련 헬퍼 함수들을 정의합니다.

### 3. pages
`pages` 폴더는 Next.js의 페이지 컴포넌트를 포함합니다.

- **_app.tsx**: 전체 애플리케이션의 초기 설정을 담당하는 파일입니다.
- **_document.tsx**: 서버 사이드 렌더링 시 사용되는 문서 설정 파일입니다.

### 4. presentation
`presentation` 폴더는 사용자 인터페이스와 관련된 컴포넌트들을 포함합니다.

- **components**: 재사용 가능한 UI 컴포넌트들을 정의합니다.
  - **atoms**: 기본적인 UI 요소들을 정의합니다.
  - **molecules**: 여러 atom을 조합하여 만든 더 복잡한 UI 요소들을 정의합니다.
  - **organisms**: 여러 molecule를 조합하여 만든 더 복잡한 UI 요소들을 정의합니다.
- **features**: 특정 기능과 관련된 UI 컴포넌트를 포함합니다.
- **layouts**: 페이지 레이아웃을 정의하는 컴포넌트를 포함합니다.
- **styles**: 스타일 관련 파일들을 포함합니다.
  - **custom**: 커스텀 스타일을 정의합니다.
  - **global.ts**: 글로벌 스타일을 정의합니다.
  - **theme.ts**: 테마 관련 스타일을 정의합니다.
  - **vendors**: 외부 라이브러리와 관련된 스타일을 정의합니다.

### 5. providers
`providers` 폴더는 애플리케이션 전역에서 사용되는 컨텍스트나 프로바이더들을 포함합니다.
