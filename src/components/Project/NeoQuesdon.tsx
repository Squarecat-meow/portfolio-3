import { SiGithub } from '@icons-pack/react-simple-icons';
import { Link } from 'lucide-react';
import Stack from './Stack';

function NeoQuesdon() {
  const stacks = [
    'Next.js',
    'Typescript',
    'PostgreSQL',
    'Prisma ORM',
    'WebSocket',
    'OAuth 2.0',
    'JWT',
    'ActivityPub',
  ];
  return (
    <>
      <div className="h-fit grid grid-cols-1 lg:grid-cols-2 gap-3">
        <img src="/screenshots/Pasted-image.png" alt="NeoQuesdon Login Image" />
        <img
          src="/screenshots/Pasted-image-2.png"
          alt="NeoQuesdon Main Image"
        />
        <img
          src="/screenshots/Pasted-image-3.png"
          alt="NeoQuesdon Profile Image"
        />
        <img
          src="/screenshots/Pasted-image-4.png"
          alt="NeoQuesdon Notification Image"
        />
      </div>
      <div className="space-y-3 font-hangul-body">
        <h1 className="text-5xl font-hangul-heading">네오-퀘스돈</h1>
        <h2 className="text-gray-500">
          SNS 계정을 연동해 누구나 익명/기명으로 질문답변을 할 수 있는 온라인
          서비스
        </h2>
        <h3 className="text-gray-500 text-sm flex flex-col lg:flex-row gap-1 lg:gap-3">
          <span className="font-bold text-black">기간</span>
          2024.11 ~ 2025.05
          <span className="font-bold text-black">역할</span>
          프론트엔드 개발 (2인 협업)
          <span className="font-bold text-black">형태</span>
          풀스택 웹 서비스
        </h3>
        <div className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-start lg:items-center">
          <Link size={14} />
          <a
            href="https://neo-quesdon.serafuku.moe"
            className="text-sm text-sky-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            neo-quesdon.serafuku.moe
          </a>
          <SiGithub size={14} />
          <a
            href="https://github.com/serafuku/neo-quesdon"
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
          Misskey 기반의 ActivityPub 프로토콜을 활용한 익명 질문답변
          플랫폼입니다. 사용자는 자신의 SNS 계정으로 로그인하여 다른 사용자에게
          익명 또는 기명으로 질문을 보낼 수 있으며, 답변은 연동된 SNS에 자동으로
          게시됩니다. 실시간 알림 시스템을 통해 즉각적인 피드백 루프를
          제공합니다.{' '}
        </p>
        <h2 className="text-3xl font-hangul-heading">기술 스택</h2>
        <div className="flex gap-2 flex-wrap">
          {stacks.map((el) => (
            <Stack text={el} key={el} />
          ))}
        </div>
        <h2 className="text-3xl font-hangul-heading">주요 구현</h2>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            WebSocket 실시간 알림 시스템
          </span>
          질문/답변의 실시간 알림으로 유저의 편의성 상승
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            동적 Metadata & OpenGraph
          </span>
          타 SNS 공유시 미리보기 기능으로 유저 참여도 향상
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            OAuth 2.0 & JWT 통합 인증
          </span>
          ActivityPub SNS 계정으로 간편 로그인/로그아웃
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="text-black mr-3 font-bold">
            ActivityPub 프로토콜 연동
          </span>
          분산형 소셜 네트워크 표준 준수
        </p>
      </div>
    </>
  );
}

export default NeoQuesdon;
