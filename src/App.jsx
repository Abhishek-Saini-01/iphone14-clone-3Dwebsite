import { NavBar, Jumbotron, SoundSection, DisplaySection,WebgiViewer, Loader } from '../src/components'
import { useRef } from 'react';


const App = () => {

  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id='content'>
        <NavBar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef}/>
    </div>
  );
}

export default App;
