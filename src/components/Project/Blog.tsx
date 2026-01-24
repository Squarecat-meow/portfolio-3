import { SiGithub } from '@icons-pack/react-simple-icons';
import { Link } from 'lucide-react';
import Stack from './Stack';

function NeoQuesdon() {
  const stacks = [
    'Next.js',
    'Typescript',
    'PostgreSQL',
    'Prisma ORM',
    'Tanstack Query',
    'Zustand',
    'TailwindCSS',
    'Docker',
  ];
  return (
    <>
      <div className="h-fit grid grid-cols-1 lg:grid-cols-2 gap-3">
        <img src="/screenshots/Pasted-image-5.png" />
        <img src="/screenshots/Pasted-image-6.png" />
        <img src="/screenshots/Pasted-image-7.png" />
        <img src="/screenshots/Pasted-image-8.png" />
      </div>
      <div className="space-y-3 font-hangul-body">
        <h1 className="text-5xl font-hangul-heading">개인 블로그</h1>
        <h2 className="text-gray-500">리액션과 타임라인으로 소통하는 블로그</h2>
        <h3 className="text-gray-500 text-sm flex flex-col lg:flex-row gap-1 lg:gap-3">
          <span className="font-bold text-black">기간</span>
          2025.08 ~ 2025.10
          <span className="font-bold text-black">역할</span>
          1인 개발
          <span className="font-bold text-black">형태</span>
          풀스택 웹 서비스
        </h3>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-start lg:items-center">
          <Link size={14} />
          <a
            href="https://yuno.mina.house"
            className="text-sm text-sky-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            yuno.mina.house
          </a>
          <SiGithub size={14} />
          <a
            href="https://github.com/Squarecat-meow/neo-blog-mk2"
            className="text-sm text-sky-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 저장소
          </a>
        </div>
        <div className="w-full border-b border-b-rose-300" />
        <h2 className="font-hangul-heading text-3xl">프로젝트 소개</h2>
        <p className="text-sm text-gray-700">
          Next.js와 PostgreSQL로 구축한 개인 블로그입니다. 댓글보다 가벼운
          리액션 시스템으로 독자와 소통하고, Notion 스타일의 마크다운 에디터로
          편리한 글쓰기 환경을 제공합니다. OAuth 2.0 인증, OpenGraph 최적화 등
          실무 수준의 기능을 구현했습니다.
        </p>
        <h2 className="text-3xl font-hangul-heading">기술 스택</h2>
        <div className="flex gap-2 flex-wrap">
          {stacks.map((el) => (
            <Stack text={el} key={el} />
          ))}
        </div>
        <h2 className="text-3xl font-hangul-heading">주요 구현</h2>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">익명 리액션 시스템</span>
          댓글 시스템의 심리적 장벽을 낮추는 익명 유저도 가능한 리액션 시스템
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            ID/PW 기반 인증 시스템
          </span>
          JWT 토큰을 활용한 세션 관리 및 보안 인증
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">마크다운 에디터</span>
          마크다운 양식으로 글 작성 및 실시간 미리보기 지원
        </p>
      </div>
    </>
  );
}

export default NeoQuesdon;
