-- fromis9 프로젝트용 comment 테이블 생성
CREATE TABLE IF NOT EXISTS comments (
    id BIGSERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    user VARCHAR(50) NOT NULL,
    member VARCHAR(20) NOT NULL, -- fromis9 멤버 이름 (chang, hayeong, heon, magun, nacco)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_comments_member ON comments(member);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 댓글을 읽을 수 있도록 정책 설정
CREATE POLICY "Anyone can read comments" ON comments
    FOR SELECT USING (true);

-- 모든 사용자가 댓글을 추가할 수 있도록 정책 설정
CREATE POLICY "Anyone can insert comments" ON comments
    FOR INSERT WITH CHECK (true);

-- 샘플 데이터 삽입 (선택사항)
INSERT INTO comments (text, user, member) VALUES
    ('노래 너무 좋아요! 💖', 'zllzl', 'chang'),
    ('오늘도 응원합니다 ✨', 'Asdf', 'chang'),
    ('콘서트 꼭 갈게요!!! 🔥', 'Ass', 'chang'),
    ('진짜 천재 아닌가요? 😍', 'dfasd', 'chang'),
    ('새 앨범 기다리고 있어요 🎶', 'dfddf', 'chang');
