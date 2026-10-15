import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cimulassão - Portal de Simulados e Vestibulares',
  description: 'Plataforma de simulados de alta performance para ENEM, FUVEST, UNICAMP, UNESP, OBMEP, OBA, OBF, SISU e Provão Paulista com gabarito comentado e estatísticas.',
  openGraph: {
    title: 'Cimulassão - Portal de Simulados e Vestibulares',
    description: 'Plataforma de simulados de alta performance para ENEM, FUVEST, UNICAMP, UNESP, OBMEP, OBA, OBF, SISU e Provão Paulista com gabarito comentado e estatísticas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cimulassão - Portal de Simulados e Vestibulares',
    description: 'Plataforma de simulados de alta performance para ENEM, FUVEST, UNICAMP, UNESP, OBMEP, OBA, OBF, SISU e Provão Paulista com gabarito comentado e estatísticas.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#05070B] text-[#DFE2EF] antialiased selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
