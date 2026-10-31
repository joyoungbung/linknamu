import Image from "next/image";

type Props = { name: string; bio: string; photo?: string };

export default function ProfileHeader({ name, bio, photo }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-neutral-300 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800">
        {photo ? (
          <Image
            src={photo}
            alt={`${name} 프로필 사진`}
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-neutral-500 dark:text-neutral-400">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
