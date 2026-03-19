const SUNO_DATA = {
    quickStyles: [
        { name: "Hip-Hop (Boom Bap)", desc: "90s 클래식 힙합", tags: "Underground boom bap hip hop, dark gritty mood, raw male rap vocal, minimal jazz sample vibe", detail: "묵직한 드럼과 재즈 샘플링이 특징인 올드스쿨 힙합입니다.", exclude: "" },
        { name: "K-Pop (Modern)", desc: "에너제틱한 아이돌 댄스", tags: "Modern K-Pop, upbeat, dance, electronic, polished production, catchy hooks, female vocals", detail: "화려한 신스 사운드와 강력한 비트의 최신 아이돌 댄스 스타일입니다.", exclude: "" },
        { name: "Synthwave", desc: "80s 레트로 전자음악", tags: "Synthwave, 80s, electronic, neon, driving beat, futuristic, analog synth", detail: "네온사인이 연상되는 80년대 감성의 미래적인 전자음악입니다.", exclude: "" },
        { name: "City Pop", desc: "세련된 도심 속 감성", tags: "80s City Pop, nostalgic, upbeat, jazzy, funky bassline", detail: "도시적인 세련미와 복고풍 감성이 어우러진 일본식 80년대 팝입니다.", exclude: "" },
        { name: "Cinematic Epic", desc: "압도적인 웅장함", tags: "Cinematic, epic, orchestral, dramatic, intense, building, powerful strings", detail: "영화의 클라이맥스처럼 심장을 울리는 거대한 오케스트라 사운드입니다.", exclude: "" },
        { name: "Lo-fi Hip Hop", desc: "차분하고 편안한 비트", tags: "Lo-fi hip hop, chill, relaxed, jazzy, soulful, boom bap, cozy texture", detail: "공부하거나 쉴 때 듣기 좋은 따뜻하고 부드러운 힙합입니다.", exclude: "" },
        { name: "R&B / Neo-Soul", desc: "그루비한 소울", tags: "Neo-soul, smooth R&B, groovy, warm synth pad, vocal fry, intimate", detail: "몽환적인 신스 패드와 그루비한 리듬이 돋보이는 네오 소울입니다.", exclude: "rock, country, techno" },
        { name: "EDM / Future Bass", desc: "축제 에너지 폭발", tags: "Future bass, EDM, euphoric, supersaw, sidechained bass, festival energy", detail: "축제 현장의 폭발적인 에너지와 감성적인 멜로디가 결합된 EDM입니다.", exclude: "acoustic, country, jazz" },
        { name: "Acoustic Folk", desc: "따뜻한 어쿠스틱", tags: "Acoustic folk, warm, singer-songwriter, fingerpicking guitar, intimate vocals", detail: "어쿠스틱 기타와 진솔한 보컬이 어우러진 포크 스타일입니다.", exclude: "electronic, heavy metal, EDM" },
        { name: "Dark Trap", desc: "어둡고 강렬한 트랩", tags: "Dark trap, 808 bass, aggressive, menacing, hi-hats, distorted", detail: "무거운 808 베이스와 공격적인 하이햇이 특징인 다크 트랩입니다.", exclude: "acoustic, jazz, country, pop" }
    ],
    tags: [
        {
            id: "structure",
            category: "곡 구조 (Structure)",
            icon: "S",
            defaultTarget: "lyric",
            items: [
                { tag: "[Intro]", desc: "도입부", detail: "곡의 시작을 알립니다. 악기 연주나 짧은 멘트로 시작하세요." },
                { tag: "[Verse]", desc: "절", detail: "노래의 가사가 전개되는 파트입니다." },
                { tag: "[Pre-Chorus]", desc: "빌드업", detail: "후렴(Chorus) 전 긴장감을 높이는 구간입니다." },
                { tag: "[Chorus]", desc: "후렴구", detail: "곡의 가장 핵심적이고 화려한 멜로디 구간입니다." },
                { tag: "[Post-Chorus]", desc: "후렴 후 여운", detail: "후렴 직후 여운을 남기거나 추임새를 넣는 구간입니다." },
                { tag: "[Bridge]", desc: "반전 보릿고개", detail: "곡 후반부에 분위기를 전환하여 지루함을 덜어줍니다." },
                { tag: "[Hook]", desc: "캐치한 훅", detail: "짧고 중독성 있는 멜로디 구절로, Chorus와 별개로 사용됩니다." },
                { tag: "[Break]", desc: "짧은 휴식", detail: "보컬이 멈추고 고조된 분위기를 잠시 가라앉히는 구간입니다." },
                { tag: "[Drop]", desc: "에너지 폭발", detail: "EDM/댄스에서 비트나 사운드가 강하게 터지는 구간입니다." },
                { tag: "[Buildup]", desc: "긴장 상승", detail: "Drop이나 Chorus 전에 에너지를 점점 끌어올리는 구간입니다." },
                { tag: "[Solo]", desc: "악기 독주", detail: "[Guitar Solo] 처럼 특정 악기를 강조할 때 씁니다." },
                { tag: "[Instrumental]", desc: "연주 구간", detail: "보컬 없이 악기 연주만으로 구성된 구간입니다." },
                { tag: "[Interlude]", desc: "간주", detail: "절과 절 사이를 이어주는 짧은 음악 구간입니다." },
                { tag: "[Outro]", desc: "결말부", detail: "노래가 마무리되며 끝나는 구간입니다." },
                { tag: "[Fade In]", desc: "점진적 시작", detail: "볼륨이 점점 커지며 곡이 시작되는 효과입니다." },
                { tag: "[Fade Out]", desc: "점진적 종료", detail: "볼륨이 점점 줄어들며 곡이 마무리되는 효과입니다." },
                { tag: "[Double Chorus]", desc: "2회 반복 후렴", detail: "후렴구를 두 번 연속 배치하여 멜로디를 강조합니다." },
                { tag: "[Final Chorus]", desc: "마지막 후렴", detail: "곡의 끝부분에서 가장 강력하게 터지는 마지막 후렴입니다." },
                { tag: "[Solo: 12s sax swell]", desc: "색소폰 솔로 (12초)", detail: "12초 동안 서서히 커지는 드라마틱한 색소폰 솔로를 유도합니다." },
                { tag: "[Break: distorted bass drop]", desc: "디스토션 베이스 드롭", detail: "강렬하게 왜곡된 베이스 드롭이 포함된 비트 브레이크 섹션입니다." },
                { tag: "[Interlude: melodic piano arpeggio]", desc: "피아노 간주", detail: "멜로디컬한 피아노 아르페지오가 흐르는 아름다운 간주 파트입니다." }
            ]
        },
        {
            id: "expert-fx",
            category: "전문가용 연출 (Expert FX)",
            icon: "F",
            defaultTarget: "lyric",
            items: [
                { tag: "[Crescendo]", desc: "강도 고조", detail: "사운드가 서서히 커지며 긴장감을 최대치로 끌어올립니다." },
                { tag: "[Pause]", desc: "완전 정적", detail: "사운드를 순식간에 멈춰 극적인 효과를 줍니다." },
                { tag: "[Silence]", desc: "완전 침묵", detail: "모든 소리가 멈추는 구간으로, 극도의 긴장감이나 반전을 위해 사용합니다." },
                { tag: "[Stop]", desc: "갑작스런 중단", detail: "모든 사운드가 즉시 멈추는 효과로, 극적인 마무리에 활용합니다." },
                { tag: "[Anticlimax]", desc: "반전 허무", detail: "기대와 달리 힘을 빼는 연출로 청중의 허를 찌릅니다." },
                { tag: "[Staccato]", desc: "짧게 끊기", detail: "음이나 보컬을 짧고 경쾌하게 끊어서 연출합니다." },
                { tag: "[Legato]", desc: "부드럽게 잇기", detail: "음과 음 사이를 매끄럽고 유려하게 연결합니다." },
                { tag: "[A cappella]", desc: "무반주 보컬", detail: "악기를 완전히 빼고 오직 목소리만 강조하는 구간을 만듭니다." },
                { tag: "[Beatbox]", desc: "비트박스", detail: "보컬이 입으로 비트를 만드는 힙합 연출을 유도합니다." }
            ]
        },
        {
            id: "vocal-character",
            category: "보컬 성별/캐릭터 (Vocal Character)",
            icon: "V",
            defaultTarget: "style",
            items: [
                { tag: "Male Vocal", desc: "남성 보컬", detail: "성인 남성의 목소리로 노래를 부릅니다." },
                { tag: "Female Vocal", desc: "여성 보컬", detail: "성인 여성의 목소리로 노래를 부릅니다." },
                { tag: "Male Vocalist", desc: "남성 가수 (대체)", detail: "Male Vocal의 대체 표현으로 동일한 효과를 냅니다." },
                { tag: "Female Vocalist", desc: "여성 가수 (대체)", detail: "Female Vocal의 대체 표현으로 동일한 효과를 냅니다." },
                { tag: "Duet", desc: "듀엣", detail: "두 명의 보컬이 함께 노래하는 형태입니다." },
                { tag: "Choir", desc: "합창", detail: "여러 보컬이 함께 노래하는 합창 스타일입니다." },
                { tag: "Boy", desc: "소년 목소리", detail: "젊은 남성(소년)의 목소리를 유도합니다." },
                { tag: "Girl", desc: "소녀 목소리", detail: "젊은 여성(소녀)의 목소리를 유도합니다." },
                { tag: "Man", desc: "성인 남성 나레이터", detail: "성숙한 남성 나레이터의 목소리를 유도합니다." },
                { tag: "Woman", desc: "성인 여성 나레이터", detail: "성숙한 여성 나레이터의 목소리를 유도합니다." }
            ]
        },
        {
            id: "vocal-style",
            category: "창법/테크닉 (Vocal Techniques)",
            icon: "V",
            defaultTarget: "style",
            items: [
                { tag: "Vocal Fry", desc: "긁는 듯한 목소리", detail: "목을 긁는 듯한 거칠고 섹시한 저음 창법을 유도합니다." },
                { tag: "Falsetto", desc: "가성 창법", detail: "높고 맑은 가성 파트를 지정할 때 사용합니다." },
                { tag: "Melismatic", desc: "화려한 기교", detail: "R&B 스타일에서 한 음절을 여러 음으로 꺾어 부르는 화려한 창법입니다." },
                { tag: "Staccato Vocals", desc: "스타카토 보컬", detail: "가사를 짧고 명확하게 끊어 불러 리듬감을 강조하는 창법입니다." },
                { tag: "Dry Vocals", desc: "드라이 보컬", detail: "에코나 리버브를 완전히 제거하여 목소리의 질감을 생생하게 살립니다." },
                { tag: "Belting", desc: "파워 보컬", detail: "흉성을 가득 실어 시원하게 내지르는 창법입니다." },
                { tag: "Stacked Harmonies", desc: "밀도 높은 화음", detail: "화음을 겹겹이 쌓아 풍성하고 웅장한 코러스를 연출합니다." },
                { tag: "Call and Response", desc: "메기고 받기", detail: "메인 보컬과 코러스가 서로 대화하듯 주고받는 연출입니다." },
                { tag: "Vibrato", desc: "음의 떨림", detail: "끝음 처리를 섬세하게 떨리도록 유도합니다." },
                { tag: "Whispered", desc: "속삭이는 보컬", detail: "ASMR 급의 신비롭고 가까운 속삭임을 만듭니다." },
                { tag: "Spoken Word", desc: "말하듯 읽기", detail: "노래가 아닌 시를 낭독하듯 말하는 스타일입니다." },
                { tag: "Rap", desc: "랩 딜리버리", detail: "리듬감 있는 스포큰 딜리버리 스타일입니다." },
                { tag: "Monologue", desc: "독백 스타일", detail: "혼잣말하듯 감정을 담아 이야기하는 연극적 보컬 스타일입니다." },
                { tag: "Narrative", desc: "이야기 서술", detail: "이야기를 들려주듯 차분하게 서술하는 내레이션 스타일입니다." },
                { tag: "Growl", desc: "그라울링", detail: "공격적이고 거친 보컬 텍스처를 만듭니다. 메탈/록에 적합합니다." },
                { tag: "Crooning", desc: "크루닝", detail: "부드럽고 친밀한 스타일로, 재즈/발라드에 어울립니다." },
                { tag: "Operatic", desc: "오페라 성악", detail: "클래식 성악 기법을 활용한 극적인 보컬 스타일입니다." },
                { tag: "Scat", desc: "스캣 보컬", detail: "즉흥적인 음절로 노래하는 재즈 특유의 보컬 기법입니다." },
                { tag: "Harmonies", desc: "하모니", detail: "여러 보컬 파트가 계층적으로 쌓이는 화음 스타일입니다." }
            ]
        },
        {
            id: "vocal-effects",
            category: "보컬 이펙트 (Vocal Effects)",
            icon: "V",
            defaultTarget: "style",
            items: [
                { tag: "Reverb", desc: "잔향 효과", detail: "광활하고 에코가 있는 사운드를 보컬에 적용합니다." },
                { tag: "Delay", desc: "딜레이 에코", detail: "보컬이 반복되는 에코 효과를 만듭니다." },
                { tag: "AutoTune", desc: "오토튠", detail: "음정 교정 효과를 적용하여 현대적인 보컬 사운드를 만듭니다." },
                { tag: "No AutoTune", desc: "오토튠 제거", detail: "자연스러운 음정의 보컬을 유도합니다." },
                { tag: "Distorted Vocals", desc: "왜곡된 보컬", detail: "의도적으로 거칠게 왜곡된 보컬 톤을 만듭니다." },
                { tag: "Filtered Vocals", desc: "필터 보컬", detail: "주파수를 변조하여 독특한 보컬 텍스처를 만듭니다." },
                { tag: "Vocoder", desc: "보코더", detail: "로봇 같은 전자적 보컬 처리를 만듭니다." },
                { tag: "Telephone Effect", desc: "전화 필터", detail: "전화 통화처럼 좁고 필터링된 보컬 사운드를 만듭니다." }
            ]
        },
        {
            id: "vocal-emotion",
            category: "보컬 감정 (Vocal Emotion)",
            icon: "V",
            defaultTarget: "style",
            items: [
                { tag: "Vulnerable", desc: "취약하고 날것의", detail: "감정이 날것 그대로 드러나는 취약한 보컬 톤입니다." },
                { tag: "Powerful", desc: "강력한", detail: "강하고 명령조의 보컬 톤을 유도합니다." },
                { tag: "Soft", desc: "부드러운", detail: "부드럽고 따뜻한 보컬 톤입니다." },
                { tag: "Aggressive", desc: "공격적인", detail: "강렬하고 공격적인 보컬 에너지를 만듭니다." },
                { tag: "Melancholic", desc: "우울한", detail: "슬프고 향수적인 감정의 보컬입니다." },
                { tag: "Joyful", desc: "행복한", detail: "행복하고 축제적인 감정의 보컬입니다." },
                { tag: "Sultry", desc: "관능적인", detail: "유혹적이고 부드러운 감정의 보컬입니다." },
                { tag: "Defiant", desc: "반항적인", detail: "반항적이고 당당한 태도의 보컬입니다." }
            ]
        },
        {
            id: "instruments",
            category: "악기 (Instruments)",
            icon: "I",
            defaultTarget: "style",
            subcategories: [
                {
                    name: "건반 (Keys)",
                    items: [
                        { tag: "Piano", desc: "어쿠스틱 피아노", detail: "클래식하고 따뜻한 어쿠스틱 피아노 사운드입니다." },
                        { tag: "Electric Piano", desc: "일렉트릭 피아노", detail: "로즈/월리처 계열의 일렉트릭 피아노 사운드입니다." },
                        { tag: "Rhodes", desc: "로즈 피아노", detail: "따뜻하고 부드러운 빈티지 일렉트릭 피아노입니다." },
                        { tag: "Wurlitzer", desc: "월리처 피아노", detail: "밝고 경쾌한 빈티지 일렉트릭 피아노입니다." },
                        { tag: "Organ", desc: "오르간", detail: "해먼드/파이프 오르간 사운드입니다." },
                        { tag: "Hammond Organ", desc: "해먼드 오르간", detail: "클래식 록/소울에 사용되는 빈티지 오르간입니다." },
                        { tag: "Synth", desc: "신스 (일반)", detail: "일반적인 신디사이저 사운드입니다." },
                        { tag: "Analog Synth", desc: "아날로그 신스", detail: "따뜻하고 빈티지한 아날로그 신디사이저 사운드입니다." },
                        { tag: "Moog Synth", desc: "무그 신스", detail: "클래식 무그 신디사이저의 특유의 두꺼운 사운드입니다." },
                        { tag: "Synth Pad", desc: "신스 패드", detail: "지속적으로 깔리는 대기적 신스 사운드입니다." },
                        { tag: "Harpsichord", desc: "하프시코드", detail: "바로크 시대의 건반 악기 사운드입니다." },
                        { tag: "Clavinet", desc: "클라비넷", detail: "펑키하고 경쾌한 건반 사운드입니다." }
                    ]
                },
                {
                    name: "현악기 (Strings)",
                    items: [
                        { tag: "Acoustic Guitar", desc: "어쿠스틱 기타", detail: "스틸/나일론 현의 따뜻한 어쿠스틱 기타입니다." },
                        { tag: "Electric Guitar", desc: "일렉트릭 기타", detail: "클린 톤의 일렉트릭 기타 사운드입니다." },
                        { tag: "Distorted Guitar", desc: "디스토션 기타", detail: "오버드라이브/디스토션이 걸린 강렬한 기타입니다." },
                        { tag: "Guitar Solo", desc: "기타 솔로", detail: "기타 리드가 돋보이는 솔로 파트입니다." },
                        { tag: "Bass Guitar", desc: "베이스 기타", detail: "일렉트릭 베이스 기타 사운드입니다." },
                        { tag: "Slap Bass", desc: "슬랩 베이스", detail: "퍼커시브한 슬랩 주법의 베이스입니다." },
                        { tag: "Upright Bass", desc: "업라이트 베이스", detail: "어쿠스틱 더블 베이스 사운드입니다." },
                        { tag: "Violin", desc: "바이올린", detail: "솔로 바이올린 사운드입니다." },
                        { tag: "Strings", desc: "현악 앙상블", detail: "여러 현악기가 함께 연주하는 앙상블입니다." },
                        { tag: "String Quartet", desc: "현악 4중주", detail: "소규모 챔버 스트링 앙상블입니다." },
                        { tag: "Cello", desc: "첼로", detail: "깊고 풍부한 솔로 첼로 사운드입니다." },
                        { tag: "Harp", desc: "하프", detail: "우아한 콘서트 하프 사운드입니다." },
                        { tag: "Ukulele", desc: "우쿨렐레", detail: "밝고 경쾌한 하와이안 기타입니다." },
                        { tag: "Banjo", desc: "밴조", detail: "블루그래스/컨트리에 사용되는 밴조입니다." },
                        { tag: "Mandolin", desc: "만돌린", detail: "이탈리안 스트링 악기 사운드입니다." },
                        { tag: "Sitar", desc: "시타르", detail: "인도 전통 현악기 사운드입니다." }
                    ]
                },
                {
                    name: "드럼/퍼커션 (Drums & Percussion)",
                    items: [
                        { tag: "Drums", desc: "표준 드럼킷", detail: "일반적인 드럼 킷 사운드입니다." },
                        { tag: "Acoustic Drums", desc: "어쿠스틱 드럼", detail: "자연스러운 어쿠스틱 드럼 사운드입니다." },
                        { tag: "Electronic Drums", desc: "일렉트로닉 드럼", detail: "신디사이저 기반의 전자 드럼 사운드입니다." },
                        { tag: "808s", desc: "TR-808", detail: "롤랜드 TR-808 드럼 머신의 아이코닉한 사운드입니다." },
                        { tag: "808 Bass", desc: "808 킥 베이스", detail: "깊고 무거운 808 킥 베이스 사운드입니다." },
                        { tag: "Drum Machine", desc: "드럼 머신", detail: "프로그래밍된 전자 비트 사운드입니다." },
                        { tag: "TR-909", desc: "TR-909", detail: "하우스/테크노에 사용되는 롤랜드 TR-909 사운드입니다." },
                        { tag: "Breakbeat", desc: "브레이크비트", detail: "잘게 자른 드럼 루프 패턴입니다." },
                        { tag: "Brush Drums", desc: "브러시 드럼", detail: "재즈에서 사용되는 부드러운 브러시워크입니다." },
                        { tag: "Percussion", desc: "퍼커션", detail: "핸드 드럼, 셰이커 등의 타악기 사운드입니다." },
                        { tag: "Taiko Drums", desc: "타이코", detail: "일본 전통 대북 사운드입니다." },
                        { tag: "Congas", desc: "콩가", detail: "라틴 음악의 핸드 드럼입니다." },
                        { tag: "Bongos", desc: "봉고", detail: "소형 핸드 드럼 사운드입니다." },
                        { tag: "Tambourine", desc: "탬버린", detail: "징글이 달린 리듬 퍼커션입니다." },
                        { tag: "Handclaps", desc: "핸드클랩", detail: "박수 사운드 이펙트입니다." }
                    ]
                },
                {
                    name: "관악기/금관 (Winds & Brass)",
                    items: [
                        { tag: "Saxophone", desc: "색소폰", detail: "재즈/R&B에 사용되는 색소폰 사운드입니다." },
                        { tag: "Tenor Sax", desc: "테너 색소폰", detail: "중간 음역의 따뜻한 색소폰입니다." },
                        { tag: "Alto Sax", desc: "알토 색소폰", detail: "밝고 표현력 있는 색소폰입니다." },
                        { tag: "Trumpet", desc: "트럼펫", detail: "밝고 날카로운 브래스 사운드입니다." },
                        { tag: "Trombone", desc: "트롬본", detail: "깊고 풍부한 저음 브래스 사운드입니다." },
                        { tag: "French Horn", desc: "프렌치 혼", detail: "오케스트라의 우아한 브래스 사운드입니다." },
                        { tag: "Brass Section", desc: "금관 앙상블", detail: "여러 금관 악기의 합주 사운드입니다." },
                        { tag: "Flute", desc: "플루트", detail: "맑고 투명한 목관 악기 사운드입니다." },
                        { tag: "Clarinet", desc: "클라리넷", detail: "따뜻하고 부드러운 목관 악기 사운드입니다." },
                        { tag: "Harmonica", desc: "하모니카", detail: "블루스/포크에 사용되는 입 하프 사운드입니다." },
                        { tag: "Accordion", desc: "아코디언", detail: "폴카/탱고에 사용되는 스퀴즈 박스 사운드입니다." }
                    ]
                },
                {
                    name: "신스/전자악기 (Synths & Electronic)",
                    items: [
                        { tag: "Synth Bass", desc: "신스 베이스", detail: "일렉트로닉 베이스 사운드입니다." },
                        { tag: "Arpeggiated Synth", desc: "아르페지오 신스", detail: "자동 아르페지오 패턴의 신스 사운드입니다." },
                        { tag: "Lead Synth", desc: "리드 신스", detail: "멜로디 라인을 담당하는 신스 사운드입니다." },
                        { tag: "Synth Stabs", desc: "신스 스탭", detail: "짧고 강렬한 신스 히트 사운드입니다." },
                        { tag: "Pad", desc: "패드", detail: "대기적이고 지속적인 신스 사운드입니다." },
                        { tag: "Pluck Synth", desc: "플럭 신스", detail: "튕기는 듯한 짧은 신스 사운드입니다." },
                        { tag: "Acid Bass", desc: "애시드 베이스", detail: "TB-303의 특유의 꿈틀거리는 베이스입니다." },
                        { tag: "Supersaw", desc: "슈퍼소우", detail: "여러 톱니파가 겹친 두꺼운 신스 사운드입니다." },
                        { tag: "Wobbly Bass", desc: "워블 베이스", detail: "LFO로 변조된 울렁이는 베이스 사운드입니다." },
                        { tag: "Glitch", desc: "글리치", detail: "디지털 오류처럼 끊기는 효과음입니다." }
                    ]
                },
                {
                    name: "오케스트라/시네마틱 (Orchestra & Cinematic)",
                    items: [
                        { tag: "Orchestra", desc: "오케스트라", detail: "풀 오케스트라 앙상블 사운드입니다." },
                        { tag: "Full Orchestra", desc: "풀 오케스트라", detail: "최대 규모의 오케스트라 앙상블입니다." },
                        { tag: "Chamber Orchestra", desc: "챔버 오케스트라", detail: "소규모 오케스트라 앙상블입니다." },
                        { tag: "Orchestral Strings", desc: "오케스트라 현악", detail: "풍부한 오케스트라 현악 섹션입니다." },
                        { tag: "Brass Stabs", desc: "브래스 스탭", detail: "드라마틱한 금관 히트 사운드입니다." },
                        { tag: "Timpani", desc: "팀파니", detail: "오케스트라 대형 드럼 사운드입니다." },
                        { tag: "Choir Vocals", desc: "합창 보컬", detail: "오케스트라 합창 앙상블 사운드입니다." },
                        { tag: "Cinematic Percussion", desc: "시네마틱 퍼커션", detail: "영화음악용 임팩트 퍼커션 사운드입니다." }
                    ]
                }
            ]
        },
        {
            id: "genres",
            category: "장르 (Genres)",
            icon: "G",
            defaultTarget: "style",
            subcategories: [
                {
                    name: "팝 (Pop)",
                    items: [
                        { tag: "Pop", desc: "팝", detail: "대중적이고 캐치한 멜로디의 팝 음악입니다." },
                        { tag: "Synth Pop", desc: "신스 팝", detail: "신디사이저 중심의 팝 음악입니다." },
                        { tag: "Electropop", desc: "일렉트로팝", detail: "전자음악과 팝의 결합입니다." },
                        { tag: "Indie Pop", desc: "인디 팝", detail: "독립적이고 실험적인 팝 음악입니다." },
                        { tag: "Dream Pop", desc: "드림 팝", detail: "몽환적이고 공간감 있는 팝 음악입니다." },
                        { tag: "Bedroom Pop", desc: "베드룸 팝", detail: "DIY 감성의 로파이한 팝 음악입니다." },
                        { tag: "Art Pop", desc: "아트 팝", detail: "실험적이고 예술적인 팝 음악입니다." },
                        { tag: "Dance Pop", desc: "댄스 팝", detail: "클럽 친화적인 업템포 팝 음악입니다." },
                        { tag: "K-Pop", desc: "케이팝", detail: "한국 대중음악 스타일입니다." },
                        { tag: "J-Pop", desc: "제이팝", detail: "일본 대중음악 스타일입니다." },
                        { tag: "City Pop", desc: "시티 팝", detail: "일본 80년대 도시 감성의 팝 음악입니다." },
                        { tag: "Teen Pop", desc: "틴 팝", detail: "10대 청소년 대상의 밝은 팝 음악입니다." },
                        { tag: "Bubblegum Pop", desc: "버블검 팝", detail: "달콤하고 경쾌한 팝 음악입니다." }
                    ]
                },
                {
                    name: "록/메탈 (Rock & Metal)",
                    items: [
                        { tag: "Rock", desc: "록", detail: "기타 중심의 일반 록 음악입니다." },
                        { tag: "Classic Rock", desc: "클래식 록", detail: "60-80년대 황금기의 록 사운드입니다." },
                        { tag: "Indie Rock", desc: "인디 록", detail: "독립 레이블 감성의 록 음악입니다." },
                        { tag: "Alternative Rock", desc: "얼터너티브 록", detail: "주류와 다른 독특한 록 사운드입니다." },
                        { tag: "Pop Rock", desc: "팝 록", detail: "라디오 친화적인 멜로딕 록입니다." },
                        { tag: "Hard Rock", desc: "하드 록", detail: "강렬한 기타와 드럼의 록 음악입니다." },
                        { tag: "Punk Rock", desc: "펑크 록", detail: "빠르고 공격적인 3코드 록입니다." },
                        { tag: "Post-Punk", desc: "포스트 펑크", detail: "예술적이고 실험적인 펑크 이후 사운드입니다." },
                        { tag: "Grunge", desc: "그런지", detail: "90년대 시애틀 사운드의 거친 록입니다." },
                        { tag: "Metal", desc: "메탈", detail: "강렬한 디스토션의 헤비 메탈입니다." },
                        { tag: "Heavy Metal", desc: "헤비 메탈", detail: "클래식한 헤비 메탈 사운드입니다." },
                        { tag: "Alternative Metal", desc: "얼터너티브 메탈", detail: "현대적 감성의 메탈 사운드입니다." },
                        { tag: "Progressive Rock", desc: "프로그레시브 록", detail: "복잡한 구조와 기교의 록 음악입니다." },
                        { tag: "Psychedelic Rock", desc: "사이키델릭 록", detail: "환각적이고 몽환적인 록 음악입니다." },
                        { tag: "Garage Rock", desc: "개러지 록", detail: "날것의 거친 로우파이 록입니다." },
                        { tag: "Blues Rock", desc: "블루스 록", detail: "블루스 영향을 받은 록 음악입니다." },
                        { tag: "Southern Rock", desc: "서든 록", detail: "미국 남부 감성의 록 음악입니다." },
                        { tag: "Post-Hardcore", desc: "포스트 하드코어", detail: "하드코어 펑크의 진화된 형태입니다." },
                        { tag: "Emo", desc: "이모", detail: "감정적이고 고백적인 록 음악입니다." },
                        { tag: "Shoegaze", desc: "슈게이즈", detail: "꿈꾸는 듯한 노이즈 기타의 록 음악입니다." }
                    ]
                },
                {
                    name: "힙합/랩 (Hip-Hop & Rap)",
                    items: [
                        { tag: "Hip Hop", desc: "힙합", detail: "클래식 힙합 사운드입니다." },
                        { tag: "Boom Bap", desc: "붐뱁", detail: "90년대 뉴욕 스타일의 힙합입니다." },
                        { tag: "Trap", desc: "트랩", detail: "현대적인 808 기반 힙합/EDM입니다." },
                        { tag: "Atlanta Rap", desc: "애틀랜타 랩", detail: "남부 힙합의 중심지 애틀랜타 스타일입니다." },
                        { tag: "Hardcore Rap", desc: "하드코어 랩", detail: "공격적이고 강렬한 랩 스타일입니다." },
                        { tag: "Lo-fi Hip Hop", desc: "로파이 힙합", detail: "편안하고 따뜻한 비트의 힙합입니다." }
                    ]
                },
                {
                    name: "일렉트로닉/댄스 (Electronic & Dance)",
                    items: [
                        { tag: "EDM", desc: "EDM", detail: "일렉트로닉 댄스 뮤직의 총칭입니다." },
                        { tag: "House", desc: "하우스", detail: "120-130 BPM의 4-on-the-floor 댄스 음악입니다." },
                        { tag: "Deep House", desc: "딥 하우스", detail: "따뜻한 베이스와 부드러운 하우스입니다." },
                        { tag: "Tech House", desc: "테크 하우스", detail: "미니멀하고 기계적인 하우스입니다." },
                        { tag: "Techno", desc: "테크노", detail: "산업적이고 반복적인 일렉트로닉 음악입니다." },
                        { tag: "Trance", desc: "트랜스", detail: "황홀하고 몽환적인 일렉트로닉 음악입니다." },
                        { tag: "Dubstep", desc: "덥스텝", detail: "헤비한 베이스와 워블이 특징인 음악입니다." },
                        { tag: "Drum and Bass", desc: "드럼 앤 베이스", detail: "160-180 BPM의 빠른 브레이크비트 음악입니다." },
                        { tag: "Ambient", desc: "앰비언트", detail: "대기적이고 명상적인 전자 음악입니다." },
                        { tag: "Synthwave", desc: "신스웨이브", detail: "80년대 감성의 레트로 전자 음악입니다." },
                        { tag: "Retrowave", desc: "레트로웨이브", detail: "빈티지 전자 음악 스타일입니다." },
                        { tag: "Chillwave", desc: "칠웨이브", detail: "편안한 레트로 신스팝입니다." },
                        { tag: "Future Bass", desc: "퓨처 베이스", detail: "감성적인 멜로디의 현대 EDM입니다." },
                        { tag: "Electro", desc: "일렉트로", detail: "펑키한 전자 음악입니다." },
                        { tag: "Industrial", desc: "인더스트리얼", detail: "거칠고 기계적인 전자 음악입니다." },
                        { tag: "IDM", desc: "IDM", detail: "인텔리전트 댄스 뮤직, 실험적 전자 음악입니다." },
                        { tag: "Downtempo", desc: "다운템포", detail: "느리고 편안한 전자 음악입니다." },
                        { tag: "Chillstep", desc: "칠스텝", detail: "멜로딕하고 부드러운 덥스텝입니다." },
                        { tag: "Hardstyle", desc: "하드스타일", detail: "강렬한 킥과 빠른 템포의 하드 댄스입니다." }
                    ]
                },
                {
                    name: "R&B/소울 (R&B & Soul)",
                    items: [
                        { tag: "R&B", desc: "알앤비", detail: "리듬 앤 블루스 음악입니다." },
                        { tag: "Neo-Soul", desc: "네오 소울", detail: "현대적 감성의 소울 음악입니다." },
                        { tag: "Soul", desc: "소울", detail: "클래식 소울 음악입니다." },
                        { tag: "Funk", desc: "펑크", detail: "그루브 중심의 리듬감 넘치는 음악입니다." },
                        { tag: "Contemporary R&B", desc: "컨템포러리 R&B", detail: "현대적인 R&B 사운드입니다." }
                    ]
                },
                {
                    name: "재즈/블루스 (Jazz & Blues)",
                    items: [
                        { tag: "Jazz", desc: "재즈", detail: "즉흥 연주가 특징인 재즈 음악입니다." },
                        { tag: "Smooth Jazz", desc: "스무스 재즈", detail: "부드럽고 접근하기 쉬운 재즈입니다." },
                        { tag: "Bebop", desc: "비밥", detail: "빠르고 복잡한 즉흥 재즈입니다." },
                        { tag: "Cool Jazz", desc: "쿨 재즈", detail: "차분하고 편안한 재즈 스타일입니다." },
                        { tag: "Jazz Fusion", desc: "재즈 퓨전", detail: "록/펑크와 재즈의 혼합입니다." },
                        { tag: "Bossa Nova", desc: "보사노바", detail: "브라질 재즈 스타일의 부드러운 음악입니다." },
                        { tag: "Blues", desc: "블루스", detail: "미국 전통 블루스 음악입니다." },
                        { tag: "Delta Blues", desc: "델타 블루스", detail: "어쿠스틱 기반의 원초적 블루스입니다." },
                        { tag: "Chicago Blues", desc: "시카고 블루스", detail: "일렉트릭 기타 중심의 도시적 블루스입니다." },
                        { tag: "Soul Jazz", desc: "소울 재즈", detail: "그루브 기반의 소울풀한 재즈입니다." },
                        { tag: "Swing", desc: "스윙", detail: "빅밴드 시대의 경쾌한 재즈입니다." }
                    ]
                },
                {
                    name: "클래식/오케스트라 (Classical & Orchestral)",
                    items: [
                        { tag: "Classical", desc: "클래식", detail: "서양 고전 음악 스타일입니다." },
                        { tag: "Baroque", desc: "바로크", detail: "1600-1750년대의 화려한 고전 음악입니다." },
                        { tag: "Romantic", desc: "로만틱", detail: "19세기 감정적인 클래식 음악입니다." },
                        { tag: "Orchestral", desc: "오케스트라", detail: "풀 오케스트라 편성의 음악입니다." },
                        { tag: "Chamber Music", desc: "실내악", detail: "소규모 앙상블의 클래식 음악입니다." },
                        { tag: "Cinematic", desc: "시네마틱", detail: "영화 사운드트랙 스타일의 음악입니다." },
                        { tag: "Minimalist", desc: "미니멀리스트", detail: "반복적 패턴의 현대 클래식 음악입니다." },
                        { tag: "Neoclassical", desc: "네오클래시컬", detail: "현대와 클래식의 융합 음악입니다." },
                        { tag: "Opera", desc: "오페라", detail: "연극적 성악이 중심인 음악입니다." }
                    ]
                },
                {
                    name: "컨트리/포크 (Country & Folk)",
                    items: [
                        { tag: "Country", desc: "컨트리", detail: "미국 전통 컨트리 음악입니다." },
                        { tag: "Modern Country", desc: "모던 컨트리", detail: "현대적 감성의 컨트리 음악입니다." },
                        { tag: "Outlaw Country", desc: "아웃로 컨트리", detail: "반항적인 컨트리 음악입니다." },
                        { tag: "Bluegrass", desc: "블루그래스", detail: "애팔래치안 전통의 어쿠스틱 음악입니다." },
                        { tag: "Folk", desc: "포크", detail: "전통 포크 음악입니다." },
                        { tag: "Indie Folk", desc: "인디 포크", detail: "현대적 독립 포크 음악입니다." },
                        { tag: "Americana", desc: "아메리카나", detail: "미국 루츠 음악의 총칭입니다." },
                        { tag: "Singer-Songwriter", desc: "싱어송라이터", detail: "개인적이고 자전적인 음악 스타일입니다." },
                        { tag: "Celtic", desc: "켈틱", detail: "아일랜드/스코틀랜드 전통 음악입니다." }
                    ]
                },
                {
                    name: "월드뮤직 (World Music)",
                    items: [
                        { tag: "African", desc: "아프리칸", detail: "아프리카 전통 리듬의 음악입니다." },
                        { tag: "Afrobeat", desc: "아프로비트", detail: "나이지리아 기원의 펑크/재즈 융합 음악입니다." },
                        { tag: "Reggae", desc: "레게", detail: "자메이카 전통의 리듬 음악입니다." },
                        { tag: "Dancehall", desc: "댄스홀", detail: "현대적인 자메이카 댄스 음악입니다." },
                        { tag: "Latin", desc: "라틴", detail: "라틴 아메리카 음악의 총칭입니다." },
                        { tag: "Salsa", desc: "살사", detail: "쿠바 기원의 열정적인 댄스 음악입니다." },
                        { tag: "Bachata", desc: "바차타", detail: "도미니카 공화국의 로맨틱 음악입니다." },
                        { tag: "Reggaeton", desc: "레게톤", detail: "라틴 어반 댄스 음악입니다." },
                        { tag: "Flamenco", desc: "플라멩코", detail: "스페인 전통의 열정적인 음악입니다." },
                        { tag: "World Music", desc: "월드뮤직", detail: "글로벌 문화를 융합한 음악입니다." },
                        { tag: "Middle Eastern", desc: "중동 음악", detail: "아랍/페르시아 전통 음악입니다." },
                        { tag: "Indian", desc: "인도 음악", detail: "남아시아 전통 음악입니다." }
                    ]
                },
                {
                    name: "기타 장르 (Other Genres)",
                    items: [
                        { tag: "Gospel", desc: "가스펠", detail: "종교적 영감의 음악입니다." },
                        { tag: "Christmas", desc: "크리스마스", detail: "휴일/축제 시즌 음악입니다." },
                        { tag: "New Age", desc: "뉴에이지", detail: "명상/이완을 위한 음악입니다." },
                        { tag: "Acoustic", desc: "어쿠스틱", detail: "전자 악기 없이 자연 악기만 사용한 음악입니다." },
                        { tag: "Ballad", desc: "발라드", detail: "느리고 감정적인 음악입니다." },
                        { tag: "Girl Group", desc: "걸그룹", detail: "여성 앙상블 보컬 스타일입니다." }
                    ]
                }
            ]
        },
        {
            id: "mood",
            category: "무드/에너지 (Mood & Energy)",
            icon: "M",
            defaultTarget: "style",
            items: [
                { tag: "Uplifting", desc: "고양적인", detail: "긍정적이고 영감을 주는 분위기입니다." },
                { tag: "Melancholic", desc: "우울한", detail: "슬프고 명상적인 분위기입니다." },
                { tag: "Haunting", desc: "으스스한", detail: "으스스하고 신비로운 분위기입니다." },
                { tag: "Dark", desc: "어두운", detail: "우울하고 불길한 분위기입니다." },
                { tag: "Joyful", desc: "즐거운", detail: "행복하고 축제적인 분위기입니다." },
                { tag: "Nostalgic", desc: "향수적인", detail: "과거를 회상하는 분위기입니다." },
                { tag: "Somber", desc: "엄숙한", detail: "진지하고 심각한 분위기입니다." },
                { tag: "Romantic", desc: "로맨틱한", detail: "사랑스럽고 부드러운 분위기입니다." },
                { tag: "Intense", desc: "강렬한", detail: "강력하고 드라마틱한 분위기입니다." },
                { tag: "Dreamy", desc: "몽환적인", detail: "꿈꾸는 듯한 흐릿한 분위기입니다." },
                { tag: "Peaceful", desc: "평화로운", detail: "차분하고 고요한 분위기입니다." },
                { tag: "Anxious", desc: "불안한", detail: "긴장되고 불안한 분위기입니다." },
                { tag: "Euphoric", desc: "황홀한", detail: "극도의 행복감과 황홀함의 분위기입니다." },
                { tag: "Mysterious", desc: "신비로운", detail: "수수께끼 같고 호기심을 자극하는 분위기입니다." },
                { tag: "Playful", desc: "장난스러운", detail: "재미있고 경쾌한 분위기입니다." },
                { tag: "Epic", desc: "웅장한", detail: "거대하고 영웅적인 분위기입니다." },
                { tag: "Intimate", desc: "친밀한", detail: "개인적이고 가까운 분위기입니다." },
                { tag: "Bittersweet", desc: "씁쓸달콤한", detail: "기쁨과 슬픔이 뒤섞인 감정입니다." },
                { tag: "Triumphant", desc: "승리감", detail: "승리하고 성취한 듯한 분위기입니다." },
                { tag: "High Energy", desc: "최고 에너지", detail: "최대 강도의 폭발적인 에너지입니다." },
                { tag: "Chill", desc: "편안한", detail: "편하고 여유로운 분위기입니다." },
                { tag: "Driving", desc: "추진력 있는", detail: "앞으로 나아가는 힘찬 에너지입니다." },
                { tag: "Explosive", desc: "폭발적인", detail: "갑작스럽게 터지는 강도의 에너지입니다." },
                { tag: "Building", desc: "점점 상승", detail: "에너지가 점차 올라가는 분위기입니다." },
                { tag: "Relaxed", desc: "여유로운", detail: "차분하고 수월한 분위기입니다." },
                { tag: "Frantic", desc: "광란적인", detail: "혼란스럽고 빠른 에너지입니다." },
                { tag: "Steady", desc: "안정적인", detail: "일정하게 유지되는 에너지입니다." }
            ]
        },
        {
            id: "mixing",
            category: "믹싱/공간감 (Audio & Mixing)",
            icon: "A",
            defaultTarget: "style",
            items: [
                { tag: "Radio Effect", desc: "라디오 필터", detail: "전화기나 라디오에서 들리는 듯한 빈티지한 음색을 입힙니다." },
                { tag: "Lo-fi Filter", desc: "로파이 필터", detail: "저음과 고음을 깎아 따뜻하고 먼지 낀 듯한 빈티지 사운드를 만듭니다." },
                { tag: "Reverb Wash", desc: "깊은 잔향", detail: "드넓은 공간에 있는 듯한 몽환적이고 깊은 울림을 줍니다." },
                { tag: "4/4 Time Signature", desc: "4/4 박자", detail: "곡의 박자감을 4/4로 명확하게 지정하여 비트의 안정성을 높입니다." },
                { tag: "BPM: 128", desc: "템포 지정 (128)", detail: "디스코나 하우스 음악에 최적화된 빠른 템포를 숫자로 직접 제어합니다." },
                { tag: "Distance: Far", desc: "원근감 (멀리)", detail: "보컬이나 악기가 멀리서 들리는 듯한 공간적 원근감을 연출합니다." },
                { tag: "Distorted", desc: "왜곡 효과", detail: "의도적으로 소리를 깨뜨려 거칠고 강렬한 느낌을 줍니다." },
                { tag: "Wide Stereo", desc: "넓은 입체감", detail: "좌우 스피커를 가득 채우는 웅장한 입체 사운드를 유도합니다." },
                { tag: "High Fidelity", desc: "고음질 추구", detail: "스튜디오에서 녹음한 듯한 깨끗하고 선명한 사운드입니다." },
                { tag: "Analog Saturation", desc: "따뜻한 질감", detail: "아날로그 장비를 통과한 듯한 따뜻하고 부드러운 왜곡을 줍니다." },
                { tag: "Tape Hiss", desc: "빈티지 노이즈", detail: "카세트 테이프 특유의 배경 노이즈를 넣어 빈티지함을 더합니다." }
            ]
        },
        {
            id: "texture",
            category: "텍스처/프로덕션 (Texture & Production)",
            icon: "T",
            defaultTarget: "style",
            items: [
                { tag: "Lo-fi", desc: "로파이", detail: "따뜻하고 열화된 저충실도 사운드입니다." },
                { tag: "Gritty", desc: "거친", detail: "거칠고 왜곡된 텍스처입니다." },
                { tag: "Clean", desc: "깨끗한", detail: "광택나고 명확한 프로덕션입니다." },
                { tag: "Raw", desc: "날것의", detail: "미처리된 라이브 같은 사운드입니다." },
                { tag: "Lush", desc: "풍성한", detail: "풍부하고 가득 찬 사운드입니다." },
                { tag: "Sparse", desc: "미니멀한", detail: "최소한의 요소로 열린 공간감을 줍니다." },
                { tag: "Tape-Saturated", desc: "테이프 새추레이션", detail: "따뜻한 아날로그 테이프 질감입니다." },
                { tag: "Vinyl Hiss", desc: "바이닐 잡음", detail: "LP 레코드 특유의 갈깍거리는 잡음입니다." },
                { tag: "Atmospheric", desc: "대기적인", detail: "광활하고 공간감 넘치는 사운드입니다." },
                { tag: "Punchy", desc: "타격감 있는", detail: "타이트하고 영향력 있는 사운드입니다." },
                { tag: "Warm", desc: "따뜻한", detail: "풍부한 저주파의 따뜻한 톤입니다." },
                { tag: "Bright", desc: "밝은", detail: "고음이 강화된 밝은 톤입니다." },
                { tag: "Polished", desc: "세련된", detail: "전문적으로 믹스된 깔끔한 사운드입니다." }
            ]
        },
        {
            id: "sfx",
            category: "사운드 이펙트 (Sound Effects)",
            icon: "X",
            defaultTarget: "lyric",
            subcategories: [
                {
                    name: "환경음 (Environment)",
                    items: [
                        { tag: "[Applause]", desc: "박수갈채", detail: "관객의 열렬한 박수 사운드입니다." },
                        { tag: "[Cheering]", desc: "환호", detail: "군중의 흥분된 환호 사운드입니다." },
                        { tag: "[Audience Laughing]", desc: "관객 웃음", detail: "관객들의 웃음소리로 라이브 현장감을 줍니다." },
                        { tag: "[Clapping]", desc: "손박수", detail: "리듬에 맞춘 손박수 사운드입니다." },
                        { tag: "[Rain]", desc: "빗소리", detail: "빗방울이 떨어지는 배경 사운드입니다." },
                        { tag: "[Thunder]", desc: "천둥", detail: "천둥 번개의 강렬한 효과음입니다." },
                        { tag: "[Rain and Thunder]", desc: "비와 천둥", detail: "폭풍우가 치는 듯한 강렬한 배경 효과음입니다." },
                        { tag: "[Wind]", desc: "바람", detail: "바람이 부는 배경 사운드입니다." },
                        { tag: "[Ocean Waves]", desc: "파도", detail: "해변의 파도 소리입니다." },
                        { tag: "[Birds Chirping]", desc: "새소리", detail: "자연 속 새들의 지저귐입니다." },
                        { tag: "[Forest]", desc: "숲 소리", detail: "숲속의 자연 환경음입니다." },
                        { tag: "[Fire Crackling]", desc: "모닥불", detail: "타닥타닥 타는 모닥불 소리입니다." },
                        { tag: "[City Ambience]", desc: "도시 소음", detail: "도시의 일상 배경 소음입니다." },
                        { tag: "[Nature Ambience]", desc: "자연의 소리", detail: "새소리, 바람소리 등 자연의 평화로운 배경음입니다." },
                        { tag: "[Live Recording]", desc: "공연장 느낌", detail: "실제 라이브 현장에서 녹음한 듯한 공간감을 유도합니다." },
                        { tag: "[Cinematic Trailer]", desc: "예고편 느낌", detail: "영화 예고편 특유의 웅장한 타격음과 긴장감을 유도합니다." }
                    ]
                },
                {
                    name: "사람/음성 (Human Sounds)",
                    items: [
                        { tag: "[Chuckles]", desc: "가벼운 웃음", detail: "가볍게 킥킥 웃는 소리입니다." },
                        { tag: "[Giggles]", desc: "킥킥 웃음", detail: "부드러운 웃음소리입니다." },
                        { tag: "[Groaning]", desc: "신음", detail: "힘겨운 소리나 불만의 음성 표현입니다." },
                        { tag: "[Sighs]", desc: "한숨", detail: "깊은 한숨 소리입니다." },
                        { tag: "[Whispers]", desc: "속삭임", detail: "작은 목소리의 속삭임 효과음입니다." },
                        { tag: "[Whistling]", desc: "휘파람", detail: "휘파람 소리 효과입니다." },
                        { tag: "[Screams]", desc: "비명", detail: "큰 비명 소리 효과입니다." },
                        { tag: "[Cough]", desc: "기침", detail: "기침 효과음입니다." },
                        { tag: "[Clears Throat]", desc: "헛기침", detail: "목청을 가다듬는 소리입니다." }
                    ]
                },
                {
                    name: "기계/전자음 (Mechanical & Electronic)",
                    items: [
                        { tag: "[Phone Ringing]", desc: "전화벨", detail: "전화가 울리는 효과음입니다." },
                        { tag: "[Beeping]", desc: "삐 소리", detail: "전자 삐 소리 효과음입니다." },
                        { tag: "[Bell Dings]", desc: "종소리", detail: "종이 울리는 맑은 효과음입니다." },
                        { tag: "[Static]", desc: "정적 노이즈", detail: "백색 소음/정적 잡음 효과입니다." },
                        { tag: "[Record Scratch]", desc: "레코드 스크래치", detail: "LP 레코드를 긁는 효과음입니다." },
                        { tag: "[Censored]", desc: "검열음", detail: "검열용 비프 사운드입니다." }
                    ]
                },
                {
                    name: "동물 (Animal Sounds)",
                    items: [
                        { tag: "[Barking]", desc: "개 짖음", detail: "개가 짖는 소리 효과입니다." },
                        { tag: "[Howling]", desc: "울부짖음", detail: "늑대/개의 울부짖는 소리입니다." },
                        { tag: "[Squawking]", desc: "새 울음", detail: "새가 크게 우는 소리입니다." }
                    ]
                }
            ]
        }
    ],
    tips: [
        {
            title: "프롬프트 내부 구조",
            content: "Suno는 문장보다 키워드 위치를 따집니다.",
            detail: "장르 -> 무드 -> 보컬 스타일 -> 악기 순으로 배치하는 것이 가장 안정적입니다."
        },
        {
            title: "태그 결합의 마법",
            content: "[Chorus | energetic | female vocal] 처럼 쓰세요.",
            detail: "꺽쇠 안에 스타일 키워드를 함께 넣으면 해당 소절의 특성이 훨씬 강력해집니다."
        },
        {
            title: "Exclude Styles 활용",
            content: "나오면 안 되는 소리를 꼭 막으세요.",
            detail: "Exclude Styles 칸에 'country, banjo' 등을 명시하면 예상치 못한 장르 혼입을 방지합니다."
        },
        {
            title: "보컬 분리 전략",
            content: "연주곡으로 먼저 뼈대를 잡으세요.",
            detail: "먼저 Instrumental Only로 곡의 구조와 멜로디를 정한 뒤, 마음에 들면 가사를 추가해 완성하세요."
        },
        {
            title: "V5 내러티브 프롬프트",
            content: "문장으로 이야기하듯 스타일을 설명하세요.",
            detail: "\"Start with ambient layers, build to a hypnotic groove with warm synths\" 처럼 쓰면 훨씬 자연스러운 흐름이 나옵니다."
        },
        {
            title: "가사 팁 (리듬)",
            content: "명확한 라임과 짧은 문장이 좋습니다.",
            detail: "문장이 너무 길면 AI가 박자를 놓치기 쉽습니다. 한 라인에 10음절 내외가 적당합니다."
        },
        {
            title: "처음 20-30단어가 핵심",
            content: "구조 태그는 스타일 프롬프트보다 10배 강력합니다.",
            detail: "프롬프트 시작 부분에 가장 중요한 태그를 배치하세요. Suno는 앞부분에 더 가중치를 둡니다."
        },
        {
            title: "악기 개수 제한",
            content: "2-4개 악기로 제한하세요.",
            detail: "너무 많은 악기를 지정하면 AI가 혼란스러워합니다. 핵심 2-4개만 명시하는 것이 깔끔합니다."
        }
    ],
    templates: [
        {
            name: "시티 힙합 (City Hip-Hop)",
            content: "[Intro: Record Scratch] (Yo, check the mic 1, 2)\n\n[Verse: raw rap | minimal beat]\n차가운 도시의 밤바람 속으로\n리듬을 타고 흐르는 우리의 목소리\n\n[Chorus: catchy hook | soulful]\n서울의 밤, 불이 꺼지지 않는 이 거리\n\n[Verse 2]\n\n[Outro: Fading Out]",
            exclude: "country, banjo, rock, metal",
            detail: "레코드 스크래치와 로파이한 감성이 어우러진 세련된 힙합 템플릿입니다."
        },
        {
            name: "감성 발라드 (Ballad)",
            content: "[Intro: classical piano]\n\n[Verse 1: female | emotional]\n창밖엔 어느새 빗방울이 맺히고\n잊혀진 줄 알았던 네 얼굴이 떠올라\n\n[Pre-Chorus: building up | strings]\n\n[Chorus: dramatic | powerful vocals]\n다시 사랑할 수 있을까, 우리 그때처럼\n\n[Bridge: Melismatic]\n\n[Outro: emotional piano solo]",
            exclude: "dance, electronic, heavy metal, rap",
            detail: "피아노 연주와 애절한 보컬이 돋보이는 눈물 보증 발라드 구조입니다."
        },
        {
            name: "하드 락 (Hard Rock)",
            content: "[Intro: Instrumental: attack]\n\n[Verse: Heavy drumming | distorted guitar]\n강렬한 비트에 몸을 던져봐\n세상을 향해 소리쳐, 멈추지 마\n\n[Chorus: powerful | high energy]\n번쩍이는 불빛 아래, 우리는 하나\n\n[Solo: shredding guitar solo]\n\n[Outro: Feedback]",
            exclude: "soft, acoustic, jazzy, k-pop",
            detail: "폭발적인 기타 솔로와 드럼 비트가 심장을 때리는 록 템플릿입니다."
        },
        {
            name: "미드나잇 재즈 (Smooth Jazz)",
            content: "[Intro: Saxophone]\n\n[Verse: Spoken | Male vocal]\n어두운 조명 아래, 혼자 남겨진 이 밤\n들려오는 색소폰 소리가 나를 달래주네\n\n[Chorus: jazzy | smooth | mellow]\n달콤한 선율에 취해, 꿈결 같은 시간\n\n[Solo: 12s sax swell]\n\n[Outro: slow fade]",
            exclude: "hip hop, techno, heavy metal",
            detail: "색소폰 선율과 딥한 보컬이 어우러진 깊은 밤의 재즈 라운지 감성입니다."
        },
        {
            name: "R&B (Neo-Soul)",
            content: "[Intro: Synth pad]\n\n[Verse: Vocal Fry | soft]\n어색한 침묵 속에 흐르는 공기\n너의 숨결이 닿을 때, 멈춰버린 시간\n\n[Chorus: Neo-soul | groovy | smooth]\n느릿느릿하게, 우리만의 리듬으로\n\n[Bridge: Stacked Harmonies]\n\n[Outro]",
            exclude: "rock, country, techno",
            detail: "몽환적인 신스 패드와 그루비한 리듬이 돋보이는 네오 소울 스타일입니다."
        },
        {
            name: "영화 오프닝 (Cinematic)",
            content: "[Intro: Grand Orchestral strings]\n\n[Spoken: Detective voice]\n사건은 빗줄기가 쏟아지던 그날 밤 시작되었다.\n범인은 반드시 현장에 다시 나타난다.\n\n[Verse: Suspenseful | intense percussion]\n\n[Chorus: Epic | cinematic | orchestral]\n\n[Outro: Dark strings fade]",
            exclude: "pop, funk, disco",
            detail: "영화의 첫 장면처럼 긴박하고 웅장한 오케스트라와 나레이션 연출입니다."
        },
        {
            name: "EDM 페스티벌 (Festival EDM)",
            content: "[Intro: Ambient synth pad]\n\n[Buildup: arpeggiated synth | rising energy]\nFeel the beat, feel the night\nWe are one under the lights\n\n[Drop: supersaw | explosive | 808 bass]\n\n[Break: filtered vocals | dreamy]\n\n[Drop 2: high energy | driving]\n\n[Outro: Fade Out]",
            exclude: "acoustic, country, jazz, classical",
            detail: "축제 현장의 폭발적인 에너지를 담은 EDM 템플릿입니다."
        },
        {
            name: "어쿠스틱 포크 (Acoustic Folk)",
            content: "[Intro: fingerpicking acoustic guitar]\n\n[Verse 1: soft | intimate | male vocal]\n바람이 불어오는 언덕 위에 서서\n멀리 보이는 마을의 불빛을 바라보네\n\n[Chorus: warm | harmonies]\n이 길의 끝에서 다시 만나자\n\n[Verse 2]\n\n[Bridge: harmonica solo]\n\n[Outro: gentle strum]",
            exclude: "electronic, EDM, heavy metal, trap",
            detail: "핑거피킹 기타와 하모니카가 어우러진 따뜻한 포크 템플릿입니다."
        }
    ]
};
