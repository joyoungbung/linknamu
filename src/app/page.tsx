import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-5 pb-16 pt-20">
      <ThemeToggle />
      <ProfileHeader name={profile.name} bio={profile.bio} photo={profile.photo} />
      <section className="mt-10 flex w-full flex-col gap-4">
        {links.map((l) => (
          <LinkCard
            key={l.id}
            id={l.id}
            title={l.title}
            url={l.url}
            initialCount={counts[l.id] ?? 0}
          />
        ))}
      </section>
    </main>
  );
}
