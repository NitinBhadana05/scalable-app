import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Todo App with Auth & Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f1117] text-gray-100 overflow-x-hidden">
  {children}
</body>

    </html>
  );
}
