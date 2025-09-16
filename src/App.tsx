// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* 自動播放影片，請將 myvideo.mp4 放在 public/ 資料夾 */}
//       <video src="/myvideo.mov" autoPlay playsInline controls muted style={{ width: '100%', maxWidth: 600, marginBottom: 24 }} />
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState<string | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 嘗試手動加載並播放
    video.load()
    const playAttempt = setInterval(() => {
      video.play()
        .then(() => {
          console.log('播放成功')
          clearInterval(playAttempt)
        })
        .catch(error => {
          console.log('播放失敗:', error)
        })
    }, 3000)

    return () => clearInterval(playAttempt)
  }, [])

  return (
    <>
      {/* 使用多源格式提高兼容性 */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        controls
        muted
        style={{ width: '100%', maxWidth: 600, marginBottom: 24 }}
        onError={(e) => {
          console.error('視頻加載錯誤', e)
          setVideoError('無法加載視頻，請檢查文件格式和網絡')
        }}
      >
        <source src="/myvideo.mov" type="video/mp4" />
        <source src="/myvideo.mov" type="video/quicktime" />
        您的瀏覽器不支援此視頻格式
      </video>

      {videoError && <div style={{ color: 'red' }}>{videoError}</div>}

      {/* 後續內容不變... */}
    </>
  )
}

export default App