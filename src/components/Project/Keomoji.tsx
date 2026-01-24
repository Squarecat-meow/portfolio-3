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
    'daisyUI',
    'Framer Motion',
  ];
  return (
    <>
      <div className="h-fit grid grid-cols-1 lg:grid-cols-2 gap-3">
        <img src="/screenshots/Pasted-image-9.png" />
        <img src="/screenshots/Pasted-image-10.png" />
        <img src="/screenshots/Pasted-image-11.png" />
        <img src="/screenshots/Pasted-image-12.png" />
      </div>
      <div className="space-y-3 font-hangul-body">
        <h1 className="text-5xl font-hangul-heading">
          커스텀 에모지 신청 페이지
        </h1>
        <h2 className="text-gray-500">
          Misskey 서버의 커스텀 에모지를 사용자가 신청하고 관리자가 관리하는
          시스템
        </h2>
        <h3 className="text-gray-500 text-sm flex flex-col lg:flex-row gap-1 lg:gap-3">
          <span className="font-bold text-black">기간</span>
          2025.08 ~ 2025.11
          <span className="font-bold text-black">역할</span>
          1인 개발
          <span className="font-bold text-black">형태</span>
          풀스택 웹 서비스
        </h3>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-start lg:items-center">
          <Link size={14} />
          <a
            href="https://keomoji.serafuku.moe"
            className="text-sm text-sky-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            keomoji.serafuku.moe
          </a>
          <SiGithub size={14} />
          <a
            href="https://github.com/Squarecat-meow/serafuku-keomoji-submission-page"
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
          Misskey 서버의 커스텀 에모지를 사용자가 신청하고 관리자가
          검토/승인하는 관리 시스템입니다. 사용자의 에모지 업로드부터 관리자의
          승인/거부 처리, Misskey API 연동을 통한 실제 서버 등록, 신청자에게
          결과 알림 전송까지 전체 워크플로우를 end-to-end로 자동화했습니다.
          daisyUI 기반의 일관된 UI와 Framer Motion 애니메이션으로 직관적인
          사용자 경험을 제공합니다.
        </p>
        <h2 className="text-3xl font-hangul-heading">기술 스택</h2>
        <div className="flex gap-2 flex-wrap">
          {stacks.map((el) => (
            <Stack text={el} />
          ))}
        </div>
        <h2 className="text-3xl font-hangul-heading">주요 구현</h2>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            E2E 자동화 워크플로우
          </span>
          에모지 신청 → 관리자 검토 → Misskey API 등록 → 멘션 알림 전송까지 전체
          자동화
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            Framer Motion 애니메이션
          </span>
          Hover 효과와 Route 전환 애니메이션으로 부드러운 UX
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            daisyUI 컴포넌트 시스템
          </span>
          일관된 디자인 시스템과 빠른 UI 개발
        </p>
      </div>
    </>
  );
}

export default NeoQuesdon;
