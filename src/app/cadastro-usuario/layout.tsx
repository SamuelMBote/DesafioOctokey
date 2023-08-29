'use client';
import {SnackbarProvider} from 'notistack';

export default function CadastroLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <SnackbarProvider maxSnack={5}>{children}</SnackbarProvider>;
}
