# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 2주 차 과제

## 과제 소개 [ github-issue-list ]

### 목표

- 특정 깃헙 레파지토리(https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

### 요구 사항

- 필수 요구 사항
    - 이슈 목록 및 상세 화면 기능 구현
    - 데이터 요청 중 로딩 표시
    - 에러 화면 구현
    - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
 
### ✔️ 배포
- ```vercel``` [🔗Link](https://github-issue-list-zeta.vercel.app/)

## 🛫 시작 가이드
- 실행을 위해 다음 Node version이 필요합니다. [Node.js ,v19.0.0]

 ```bash
$ git clone https://github.com/HYBEN09/github-issue-list.git
$ cd github-issue-list
$ npm install
$ npm run start
```

## 🛠️ 사용한 기술 스택
#### Development

![Typescript](https://img.shields.io/badge/Typescript-3366CC?style=for-the-badge&logo=Javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/recoil-CCCCFF?style=for-the-badge&logo=recoil&logoColor=white"/>

## 🌲프로젝트 구조
```bash
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   └── loading.svg
│   └── vite.svg
├── src
│   ├── @recoil
│   │   ├── issueState.ts
│   │   └── loadingState.ts
│   ├── @types
│   │   └── global.d.ts
│   ├── App.tsx
│   ├── GlobalStyle.ts
│   ├── api
│   │   └── issue.ts
│   ├── components
│   │   ├── Issue
│   │   │   ├── Advertisement.tsx
│   │   │   ├── IssueList.tsx
│   │   │   ├── IssueListItem.tsx
│   │   │   ├── IssuePost.tsx
│   │   │   └── styled.ts
│   │   └── Spinner
│   │       └── LoadingSpinner.tsx
│   ├── constants
│   │   └── config.ts
│   ├── hooks
│   │   └── useInfiniteScroll.ts
│   ├── layout
│   │   └── Header.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── ErrorPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── IssueDetailPage.tsx
│   │   └── RootLayout.tsx
│   ├── routes.tsx
│   ├── utils
│   │   └── convertDate.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
