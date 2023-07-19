import { useRef } from 'react'
import { EpubViewer, ReactEpubViewer } from 'react-epub-viewer'

const App = () => {
  const viewerRef = useRef(null)

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <ReactEpubViewer
        url={
          'https://firebasestorage.googleapis.com/v0/b/safaricom-41234.appspot.com/o/new%20doc.epub?alt=media&token=c02d2fa6-436a-4c50-9415-811b067a1e65'
        }
        ref={viewerRef}
        viewerOption='scroll'
      />
    </div>
  )
}

export default App
