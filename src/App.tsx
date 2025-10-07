// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* 自動播放影片，請將 myvideo.mp4 放在 public/ 資料夾 */}
//       <video src="/testmp4.mp4" autoPlay playsInline controls muted style={{ width: '100%', maxWidth: 600, marginBottom: 24 }} />
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


// import { useState, useRef, useEffect } from 'react'

// import './App.css'

// function App() {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [videoError, setVideoError] = useState<string | null>(null)

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     // 嘗試手動加載並播放
//     video.load()
//     const playAttempt = setInterval(() => {
//       video.play()
//         .then(() => {
//           console.log('播放成功')
//           clearInterval(playAttempt)
//         })
//         .catch(error => {
//           console.log('播放失敗:', error)
//         })
//     }, 3000)

//     return () => clearInterval(playAttempt)
//   }, [])

//   return (
//     <>
//       {/* 使用多源格式提高兼容性 */}
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         controls
//         muted
//         style={{ width: '100%', maxWidth: 600, marginBottom: 24 }}
//         onError={(e) => {
//           console.error('視頻加載錯誤', e)
//           setVideoError('無法加載視頻，請檢查文件格式和網絡')
//         }}
//       >
//         <source src="/testmp4.mp4" type="video/mp4" />
//         <source src="/tesmp4.mp4" type="video/quicktime" />
//         您的瀏覽器不支援此視頻格式
//       </video>

//       {videoError && <div style={{ color: 'red' }}>{videoError}</div>}

//       {/* 後續內容不變... */}
//     </>
//   )
// }

// export default App



// import { useState, useRef, useEffect } from 'react'
// import './App.css'

// function App() {
//   console.log('App 組件初始化')
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [videoError, setVideoError] = useState<string | null>(null)
  
//   console.log('組件狀態初始化完成', { videoRef: videoRef.current, videoError })

//   useEffect(() => {
//     console.log('useEffect 開始執行 - 視頻播放初始化')
//     const video = videoRef.current
//     if (!video) {
//       console.log('視頻元素未找到')
//       return
//     }
    
//     console.log('加載視頻')
//     video.load()
    
//     const playAttempt = setInterval(() => {
//       console.log('嘗試播放視頻')
//       video.play()
//         .then(() => {
//           console.log('✅ 播放成功')
//           clearInterval(playAttempt)
//         })
//         .catch(error => {
//           console.log('❌ 播放失敗:', error)
//         })
//     }, 3000)

//     return () => {
//       console.log('清理播放嘗試計時器')
//       clearInterval(playAttempt)
//     }
//   }, [])

//   console.log('渲染前', { videoError })
  
//   return (
//     <>
//       {console.log('JSX 渲染開始')}
//       {/* 使用多源格式提高兼容性 */}
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         controls
//         muted
//         style={{ width: '100%', maxWidth: 600, marginBottom: 24 }}
//         onError={(e) => {
//           console.error('視頻加載錯誤', e)
//           console.log('設置錯誤狀態')
//           setVideoError('無法加載視頻，請檢查文件格式和網絡')
//         }}
//         onLoadStart={() => console.log('視頻開始加載')}
//         onLoadedData={() => console.log('視頻數據已加載')}
//         onCanPlay={() => console.log('視頻可以播放')}
//         // 添加播放、暫停、音量變化事件處理
//   onPlay={() => console.log(`onplay:[${new Date().toISOString()}] 📺 視頻開始播放`)}
//   onPause={() => console.log(`onPause[${new Date().toISOString()}] ⏸️ 視頻已暫停`)}
//   onVolumeChange={(e) => {
//     const video = e.target as HTMLVideoElement
//     if (video.muted) {
//       console.log(`[${new Date().toISOString()}] 🔇 視頻已靜音`)
//     } else {
//       console.log(`[${new Date().toISOString()}] 🔊 視頻已取消靜音，音量: ${video.volume.toFixed(2)}`)
//     }
//   }}
//   // 記錄播放進度
//   onTimeUpdate={(e) => {
//     const video = e.target as HTMLVideoElement
//     // 每10秒記錄一次播放進度，避免日誌過多
//     if (Math.floor(video.currentTime) % 10 === 0 && video.currentTime > 0) {
//       console.log(`[${new Date().toISOString()}] ⏱️ 播放進度: ${Math.floor(video.currentTime)}秒`)
//     }
//   }}
//       >
//         <source src="/testmp4.mp4" type="video/mp4" />
//         <source src="/tesmp4.mp4" type="video/quicktime" />
//         您的瀏覽器不支援此視頻格式
//       </video>

//       {videoError && (
//         console.log('顯示錯誤信息', videoError),
//         <div style={{ color: 'red' }}>{videoError}</div>
//       )}
//       {console.log('JSX 渲染結束')}
//     </>
//   )
// }

// export default App



import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  console.log('App 組件初始化')
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState<string | null>(null)
  const [userInteracted, setUserInteracted] = useState(false)
  
  console.log('組件狀態初始化完成', { videoRef: videoRef.current, videoError })

  // 監聽任何用戶互動，iOS 需要用戶互動才能播放
  useEffect(() => {
    const handleUserInteraction = () => {
      console.log('用戶互動檢測到')
      setUserInteracted(true)
      
      // 嘗試在用戶互動後播放
      const video = videoRef.current
      if (video) {
        console.log('嘗試在用戶互動後播放')
        video.play()
          .then(() => console.log('用戶互動後播放成功'))
          .catch(e => console.log('用戶互動後播放失敗', e))
      }
    }
    
    // 監聽全局交互事件
    document.addEventListener('touchstart', handleUserInteraction, {once: true})
    document.addEventListener('click', handleUserInteraction, {once: true})
    
    return () => {
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
    }
  }, [])

  useEffect(() => {
    console.log('useEffect 開始執行 - 視頻播放初始化')
    const video = videoRef.current
    if (!video) {
      console.log('視頻元素未找到')
      return
    }
    
    console.log('加載視頻')
    video.load()
    
    // 檢查支援的格式
    console.log('檢查視頻格式支援情況', {
      mp4: video.canPlayType('video/mp4'),
      quicktime: video.canPlayType('video/quicktime')
    })
    
    const playAttempt = setInterval(() => {
      // 只在用戶互動後嘗試播放，或者在非iOS裝置上
      if (userInteracted || !/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        console.log('嘗試播放視頻')
        video.play()
          .then(() => {
            console.log('✅ 播放成功')
            clearInterval(playAttempt)
          })
          .catch(error => {
            console.log('❌ 播放失敗:', error)
          })
      }
    }, 3000)

    return () => {
      console.log('清理播放嘗試計時器')
      clearInterval(playAttempt)
    }
  }, [userInteracted])


  useEffect(() => {
  const video = videoRef.current
  if (!video) return
  
  // 檢查瀏覽器支持的視頻格式
  const supportInfo = {
    mp4: video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'),
    webm: video.canPlayType('video/webm; codecs="vp8, vorbis"'),
    ogg: video.canPlayType('video/ogg; codecs="theora, vorbis"'),
  }
  
  console.log('瀏覽器視頻格式支持情況:', supportInfo)
  console.log('用戶代理:', navigator.userAgent)
}, [])

  // 添加一個明確的播放按鈕
  const handlePlayButtonClick = () => {
    console.log('用戶點擊播放按鈕')
    const video = videoRef.current
    if (video) {
      setUserInteracted(true)
      video.play()
        .then(() => console.log('按鈕點擊後播放成功'))
        .catch(e => console.log('按鈕點擊後播放失敗', e))
    }
  }

  console.log('渲染前', { videoError, userInteracted })
  
  return (
    <>
      {console.log('JSX 渲染開始')}
      
      {/* 使用多源格式提高兼容性 */}
      <video
        ref={videoRef}
        playsInline
        controls
        muted
        style={{ width: '100%', maxWidth: 600, marginBottom: 24 }}
        onError={(e) => {
          const video = e.target as HTMLVideoElement
          console.error('視頻錯誤詳情:', {
            error: video.error,
            errorCode: video.error ? video.error.code : 'unknown',
            errorMessage: video.error ? video.error.message : 'unknown',
            networkState: video.networkState,
            readyState: video.readyState
          })
          setVideoError('視頻加載失敗，請檢查格式與網絡')
        }}
        onLoadStart={() => console.log('視頻開始加載')}
        onLoadedData={() => console.log('視頻數據已加載')}
        onCanPlay={() => console.log('視頻可以播放')}
        onPlay={() => console.log(`[${new Date().toISOString()}] 📺 視頻開始播放`)}
        onPause={() => console.log(`[${new Date().toISOString()}] ⏸️ 視頻已暫停`)}
        onVolumeChange={(e) => {
          const video = e.target as HTMLVideoElement
          if (video.muted) {
            console.log(`[${new Date().toISOString()}] 🔇 視頻已靜音`)
          } else {
            console.log(`[${new Date().toISOString()}] 🔊 視頻已取消靜音，音量: ${video.volume.toFixed(2)}`)
          }
        }}
        onTimeUpdate={(e) => {
          const video = e.target as HTMLVideoElement
          if (Math.floor(video.currentTime) % 10 === 0 && video.currentTime > 0) {
            console.log(`[${new Date().toISOString()}] ⏱️ 播放進度: ${Math.floor(video.currentTime)}秒`)
          }
        }}
      >
        <source src={`${window.location.origin}/testmp4.mp4`} type="video/mp4" />
        <source src="/testmp4.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
        您的瀏覽器不支援此視頻格式
      </video>

      {/* 添加明確的播放按鈕來觸發用戶交互 */}
      <button 
        onClick={handlePlayButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          margin: '10px 0',
          background: '#317efb',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        點擊播放視頻
      </button>

      {videoError && (
        console.log('顯示錯誤信息', videoError),
        <div style={{ color: 'red' }}>{videoError}</div>
      )}
      {console.log('JSX 渲染結束')}
    </>
  )
}

export default App



// import { useEffect, useRef, useState } from 'react'
// import videojs from 'video.js'
// import 'video.js/dist/video-js.css'

// function App() {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const playerRef = useRef<any>(null)
//   const [playerError, setPlayerError] = useState<string | null>(null)
//   const [domReady, setDomReady] = useState(false)
  
//   // 確保 DOM 準備就緒
//   useEffect(() => {
//     setDomReady(true)
//   }, [])
  
//   // 在 DOM 準備就緒後初始化播放器
//   useEffect(() => {
//     if (!domReady || !videoRef.current) return
    
//     console.log('DOM 準備就緒，初始化播放器')
    
//     // 確保元素在 DOM 中
//     if (!document.body.contains(videoRef.current)) {
//       console.error('視頻元素不在 DOM 中')
//       return
//     }
    
//     const options = {
//       autoplay: false,
//       controls: true,
//       responsive: true,
//       fluid: true,
//       playsinline: true,
//       sources: [{
//         src: '/testmp4.mp4',
//         type: 'video/mp4'
//       }]
//     }
    
//     try {
//       // 確保之前的實例被清理
//       if (playerRef.current) {
//         playerRef.current.dispose()
//       }
      
//       // 使用 setTimeout 確保 DOM 完全渲染
//       setTimeout(() => {
//         if (!videoRef.current) return
        
//         playerRef.current = videojs(videoRef.current, options, function() {
//           console.log('播放器已初始化')
//           this.on('ready', () => {
//             console.log('播放器準備就緒')
//           })
//         })
        
//         playerRef.current.on('play', () => {
//           console.log(`[${new Date().toISOString()}] 📺 視頻開始播放`)
//         })
        
//         playerRef.current.on('error', () => {
//           console.error('播放器錯誤', playerRef.current.error())
//           setPlayerError('視頻加載失敗，請檢查格式與網絡')
//         })
//       }, 100)
//     } catch (e) {
//       console.error('初始化播放器失敗', e)
//       setPlayerError('播放器初始化失敗')
//     }
    
//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose()
//       }
//     }
//   }, [domReady])
  
//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>視頻播放器</h1>
      
//       <div data-vjs-player style={{ width: '100%', height: 'auto', minHeight: '300px', border: '1px solid #ccc' }}>
//         <video 
//           ref={videoRef} 
//           className="video-js vjs-big-play-centered" 
//           playsInline 
//           controls
//           preload="auto"
//           width="100%"
//           height="100%"
//           style={{ display: 'block' }}
//         />
//       </div>
      
//       {playerError && (
//         <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
//           {playerError}
//         </div>
//       )}
      
//       <div style={{ marginTop: '20px', textAlign: 'center' }}>
//         <button
//           onClick={() => playerRef.current?.play()}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             margin: '10px 5px',
//             background: '#317efb',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px'
//           }}
//         >
//           播放
//         </button>
//         <button
//           onClick={() => playerRef.current?.pause()}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             margin: '10px 5px',
//             background: '#666',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px'
//           }}
//         >
//           暫停
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App
