export default function ProjectModal() {
  return (
    <div className="project-modal-overlay" id="projectModal">
      <div className="project-modal">
        <button className="modal-close" id="modalClose" aria-label="Close gallery">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <div className="modal-body">
          <div className="modal-image-wrap">
            <img className="modal-image" id="modalImage" src={undefined} alt={undefined} />
            <button className="modal-nav modal-prev" id="modalPrev" aria-label="Previous image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className="modal-nav modal-next" id="modalNext" aria-label="Next image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
          <div className="modal-dots" id="modalDots"></div>
          <div className="modal-info">
            <h3 className="modal-title" id="modalTitle"></h3>
            <p className="modal-desc" id="modalDesc"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
