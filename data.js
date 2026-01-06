const SUNO_DATA = {
    quickStyles: [
        { name: "힙합 (Boom Bap)", desc: "90s 클래식 힙합", tags: "Underground boom bap hip hop, dark gritty mood, raw male rap vocal, minimal jazz sample vibe", detail: "묵직한 드럼과 재즈 샘플링이 특징인 올드스쿨 힙합입니다." },
        { name: "K-Pop (Modern)", desc: "에너제틱한 아이돌 댄스", tags: "Modern K-Pop, upbeat, dance, electronic, polished production, catchy hooks, female vocals", detail: "화려한 신스 사운드와 강력한 비트의 최신 아이돌 댄스 스타일입니다." },
        { name: "Synthwave", desc: "80s 레트로 전자음악", tags: "Synthwave, 80s, electronic, neon, driving beat, futuristic, analog synth", detail: "네온사인이 연상되는 80년대 감성의 미래적인 전자음악입니다." },
        { name: "City Pop", desc: "세련된 도심 속 감성", tags: "80s City Pop, nostalgic, upbeat, jazzy, funky bassline", detail: "도시적인 세련미와 복고풍 감성이 어우러진 일본식 80년대 팝입니다." },
        { name: "Cinematic Epic", desc: "압도적인 웅장함", tags: "Cinematic, epic, orchestral, dramatic, intense, building, powerful strings", detail: "영화의 클라이맥스처럼 심장을 울리는 거대한 오케스트라 사운드입니다." },
        { name: "Lo-fi Hip Hop", desc: "차분하고 편안한 비트", tags: "Lo-fi hip hop, chill, relaxed, jazzy, soulful, boom bap, cozy texture", detail: "공부하거나 쉴 때 듣기 좋은 따뜻하고 부드러운 힙합입니다." }
    ],
    tags: [
        {
            category: "곡 구조 (Structure)",
            items: [
                { tag: "[Intro]", desc: "도입부", detail: "곡의 시작을 알립니다. 악기 연주나 짧은 멘트로 시작하세요." },
                { tag: "[Verse]", desc: "절", detail: "노래의 가사가 전개되는 파트입니다." },
                { tag: "[Pre-Chorus]", desc: "빌드업", detail: "후렴(Chorus) 전 긴장감을 높이는 구간입니다." },
                { tag: "[Chorus]", desc: "후렴구", detail: "곡의 가장 핵심적이고 화려한 멜로디 구간입니다." },
                { tag: "[Post-Chorus]", desc: "후렴 후 여운", detail: "후렴 직후 여운을 남기거나 추임새를 넣는 구간입니다." },
                { tag: "[Bridge]", desc: "반전 보릿고개", detail: "곡 후반부에 분위기를 전환하여 지루함을 덜어줍니다." },
                { tag: "[Break]", desc: "짧은 휴식", detail: "보컬이 멈추고 고조된 분위기를 잠시 가라앉히는 구간입니다." },
                { tag: "[Drop]", desc: "에너지 폭발", detail: "EDM/댄스에서 비트나 사운드가 강하게 터지는 구간입니다." },
                { tag: "[Solo]", desc: "악기 독주", detail: "[Guitar Solo] 처럼 특정 악기를 강조할 때 씁니다." },
                { tag: "[Outro]", desc: "결말부", detail: "노래가 마무리되며 끝나는 구간입니다." },
                { tag: "[Solo: 12s sax swell]", desc: "색소폰 솔로 (12초)", detail: "12초 동안 서서히 커지는 드라마틱한 색소폰 솔로를 유도합니다." },
                { tag: "[Break: distorted bass drop]", desc: "디스토션 베이스 드롭", detail: "강렬하게 왜곡된 베이스 드롭이 포함된 비트 브레이크 섹션입니다." },
                { tag: "[Interlude: melodic piano arpeggio]", desc: "피아노 간주", detail: "멜로디컬한 피아노 아르페지오가 흐르는 아름다운 간주 파트입니다." },
                { tag: "[Double Chorus]", desc: "2회 반복", detail: "후렴구를 두 번 연속 배치하여 멜로디를 강조합니다." },
                { tag: "[Final Chorus]", desc: "마지막 후렴", detail: "곡의 끝부분에서 가장 강력하게 터지는 마지막 후렴입니다." }
            ]
        },
        {
            category: "전문가용 연출 (Expert FX)",
            items: [
                { tag: "[Crescendo]", desc: "강도 고조", detail: "사운드가 서서히 커지며 긴장감을 최대치로 끌어올립니다. 빌드업 섹션에 최적입니다." },
                { tag: "[Pause]", desc: "완전 정적", detail: "사운드를 순식간에 멈춰 극적인 효과를 줍니다. 비트가 터지기 직전에 사용하세요." },
                { tag: "[Anticlimax]", desc: "반전 허무", detail: "기대와 달리 힘을 빼는 연출로 청중의 허를 찌릅니다." },
                { tag: "[Staccato]", desc: "짧게 끊기", detail: "음이나 보컬을 짧고 경쾌하게 끊어서 연출합니다." },
                { tag: "[Legato]", desc: "부드럽게 잇기", detail: "음과 음 사이를 매끄럽고 유려하게 연결합니다." },
                { tag: "[A cappella]", desc: "무반주 보컬", detail: "악기를 완전히 빼고 오직 목소리만 강조하는 구간을 만듭니다." },
                { tag: "[Beatbox]", desc: "비트박스", detail: "보컬이 입으로 비트를 만드는 힙합 연출을 유도합니다." },
                { tag: "[Fading Out]", desc: "서서히 사라짐", detail: "곡의 끝에서 볼륨이 점점 줄어들며 마무리되는 효과입니다." }
            ]
        },
        {
            category: "창법/테크닉 (Vocals+)",
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
                { tag: "Whispered", desc: "속삭이는 보컬", detail: "ASMR 급의 신비롭고 가까운 속삭임을 만듭니다." }
            ]
        },
        {
            category: "믹싱/공간감 (Audio/Mixing)",
            items: [
                { tag: "Radio Effect", desc: "라디오 필터", detail: "전화기나 라디오에서 들리는 듯한 빈티지한 음색을 입힙니다." },
                { tag: "Lo-fi Filter", desc: "로파이 필터", detail: "저음과 고음을 깎아 따뜻하고 먼지 낀 듯한 빈티지 사운드를 만듭니다." },
                { tag: "Reverb Wash", desc: "깊은 잔향", detail: "드넓은 공간에 있는 듯한 몽환적이고 깊은 울림을 줍니다." },
                { tag: "4/4 Time Signature", desc: "4/4 박자", detail: "곡의 박자감을 4/4로 명확하게 지정하여 비트의 안정성을 높입니다." },
                { tag: "BPM: 128", desc: "템포 지정 (128)", detail: "디스코나 하우스 음악에 최적화된 빠른 템포를 숫자로 직접 제어합니다." },
                { tag: "Distance: Far", desc: "원근감 (멀리)", detail: "보컬이나 악기가 멀리서 들리는 듯한 공간적 원근감을 연출합니다." },
                { tag: "Distorted", desc: "왜곡 효과", detail: "의도적으로 소리를 깨뜨려 거칠고 강렬한 록/인더스트리얼 느낌을 줍니다." },
                { tag: "Wide Stereo", desc: "넓은 입체감", detail: "좌우 스피커를 가득 채우는 웅장한 입체 사운드를 유도합니다." },
                { tag: "High Fidelity", desc: "고음질 추구", detail: "튜디오에서 녹음한 듯한 깨끗하고 선명한 사운드 퀄리티를 지향합니다." },
                { tag: "Analog Saturation", desc: "따뜻한 질감", detail: "아날로그 장비를 통과한 듯한 따뜻하고 부드러운 왜곡을 줍니다." },
                { tag: "Tape Hiss", desc: "빈티지 노이즈", detail: "카세트 테이프 특유의 배경 노이즈를 넣어 빈티지함을 더합니다." }
            ]
        },
        {
            category: "환경 설정 (Environment)",
            items: [
                { tag: "[Applause]", desc: "관객 박수", detail: "곡의 시작이나 끝에 관객의 열렬한 호응과 박수를 넣습니다." },
                { tag: "[Audience Laughing]", desc: "관객 웃음", detail: "곡 중간에 관객들의 웃음소리를 넣어 라이브 쇼 같은 현장감을 줍니다." },
                { tag: "[Rain and Thunder]", desc: "비와 천둥", detail: "폭풍우가 치는 듯한 강렬한 배경 효과음을 추가합니다." },
                { tag: "[City Ambient Noise]", desc: "도시 소음", detail: "자동차 경적, 사람들 웅성거림 등 도시의 일상 소음을 배경에 줍니다." },
                { tag: "[Nature Ambience]", desc: "자연의 소리", detail: "새소리, 바람소리 등 자연의 평화로운 배경음을 추가합니다." },
                { tag: "[Live Recording]", desc: "공연장 느낌", detail: "실제 라이브 현장에서 녹음한 듯한 공간감과 소음을 유도합니다." },
                { tag: "[Cinematic Trailer]", desc: "예고편 느낌", detail: "영화 예고편 특유의 웅장한 타격음과 긴장감을 유도합니다." }
            ]
        }
    ],
    tips: [
        {
            title: "🧠 프롬프트 내부 구조",
            content: "Suno는 문장보다 키워드 위치를 따집니다.",
            detail: "장르 → 무드 → 보컬 스타일 → 악기 순으로 배치하는 것이 가장 안정적입니다."
        },
        {
            title: "🧪 태그 결합의 마법",
            content: "[Chorus | energetic | female vocal] 처럼 쓰세요.",
            detail: "꺽쇠 안에 스타일 키워드를 함께 넣으면 해당 소절의 특성이 훨씬 강력해집니다."
        },
        {
            title: "🚫 Exclude Styles 활용",
            content: "나오면 안 되는 소리를 꼭 막으세요.",
            detail: "Exclude Styles 칸에 'country, banjo' 등을 명시하면 예상치 못한 장르 혼입을 방지합니다."
        },
        {
            title: "🎤 보컬 분리 전략",
            content: "연주곡으로 먼저 뼈대를 잡으세요.",
            detail: "먼저 Instrumental Only로 곡의 구조와 멜로디를 정한 뒤, 마음에 들면 가사를 추가해 완성하세요."
        },
        {
            title: "📖 V5 내러티브 프롬프트",
            content: "문장으로 이야기하듯 스타일을 설명하세요.",
            detail: "\"Start with ambient layers, build to a hypnotic groove with warm synths\" 처럼 쓰면 훨씬 자연스러운 흐름이 나옵니다."
        },
        {
            title: "📝 가사 팁 (리듬)",
            content: "명확한 라임과 짧은 문장이 좋습니다.",
            detail: "문장이 너무 길면 AI가 박자를 놓치기 쉽습니다. 한 라인에 10음절 내외가 적당합니다."
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
        }
    ]
};
