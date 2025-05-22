"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
      return;
    }
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, router]);

  return (
    <div className="section">
      <h2>Not Found</h2>
      <p>Не удалось найти запрошенный ресурс</p>
      <Link href="/">
        <strong>Вернуться на домашнюю страницу</strong>
      </Link>

      {countdown > 0 && (
        <p style={{ color: "var(--dimmed)" }}>
          Автоматический переход через <strong>{countdown}</strong> сек.
        </p>
      )}
    </div>
  );
};

export default NotFound;
