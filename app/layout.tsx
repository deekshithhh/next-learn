import '@/app/ui/global.css';
import { inter } from  '@/app/ui/fonts';
import { Metadata} from "next";


export const metadata: Metadata={
    title: {
        template: '%s | Invoice Dashboard',
        default:'Dashboard'
    },
    description:'Invoice Dashboard Learning',
    // metadataBase
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
  );
}