export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 더미 값입니다. 실제 내용으로 교체하세요.
export const profile = {
  name: "조영붕",
  bio: "1억 매출이 목표인 쿠팡셀러",
  // 실제 사진은 public/ 아래에 넣고 경로를 바꾸세요. 예: "/profile.jpg"
  photo: "/profile-dummy.svg",
};

// 더미 링크입니다. id는 클릭 수 집계의 키이므로, 운영 시작 후에는 바꾸지 마세요.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
