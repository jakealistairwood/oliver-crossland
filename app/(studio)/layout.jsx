export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
  }
  
  export default async function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  