import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json([
    { label: 'Abhishek Gupta', tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'] },
    { label: 'Abhishek Gupta', tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'] },
    { label: 'Abhishek Gupta', tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'] },
  ]);
}
