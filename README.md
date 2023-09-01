# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 2주 차 과제

- 목표 : 특정 깃헙 레파지토리(https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축
- 작업 기간 : 2023.08.29 ~2023.09.01
- 팀 Refo : 🔗[Link](https://github.com/WantedTeam17/pre-onboarding-12th-2-17)

### ✔️ 배포

- `vercel` [🔗Link](https://github-issue-list-zeta.vercel.app/)


## 📝 과제 요구사항

- 필수 요구사항

  - [x] 로딩 및 에러 화면 구현

- `/` 이슈 목록 페이지

  - [x] 특정 레파지토리의 이슈 목록 출력
  - [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
  - [x] 다섯 번째 셀마다 광고 이미지 출력
  - [x] 화면을 아래로 스크롤 시 추가 이슈 목록 로딩 (Infinity Scroll)

- `/issue:id` 이슈 상세 페이지
  - [x] 이슈의 상세 내용 표시

## 🛠️ 사용한 기술 스택

#### Development

![Typescript](https://img.shields.io/badge/Typescript-3366CC?style=for-the-badge&logo=Javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/recoil-CCCCFF?style=for-the-badge&logo=recoil&logoColor=white"/>


## 📌 구현 목록

| 이슈 목록                        | 이슈 상세 목록                           |
| -------------------------------- | ------------------------------------ |
| ![이슈 목록](https://github.com/HYBEN09/github-issue-list/assets/104710243/0a0d326e-fb77-466c-8a6b-1d2a63d86ba1) | ![이슈 상세 목록](https://github.com/HYBEN09/github-issue-list/assets/104710243/b618433d-354f-4d5f-9270-8233e15e321c)




## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다. [Node.js ,v19.0.0]

```bash
$ git clone https://github.com/HYBEN09/github-issue-list.git
$ cd github-issue-list
$ npm install
$ npm run start
```



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
│   └── favicon.ico
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
│   │   │   └── styled.ts
│   │   ├── Markdown
│   │   │   └── Markdown.tsx
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
