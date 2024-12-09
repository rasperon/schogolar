export interface Language {
  code: string;
  name: string;
  prompt: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', prompt: 'Please provide the answer in English.' },
  { code: 'tr', name: 'Türkçe', prompt: 'Lütfen Türkçe olarak cevap verin.' },
  { code: 'az', name: 'Azərbaycanca', prompt: 'Zəhmət olmasa Azərbaycan dilində cavab verin.' },
  { code: 'es', name: 'Español', prompt: 'Por favor, responda en español.' },
  { code: 'fr', name: 'Français', prompt: 'Veuillez répondre en français.' },
  { code: 'de', name: 'Deutsch', prompt: 'Bitte antworten Sie auf Deutsch.' },
];

export function getSystemLanguage(): string {
  const browserLang = navigator.language.split('-')[0];
  return languages.some(lang => lang.code === browserLang) ? browserLang : 'en';
}

export const examplePrompts = [
    // Block 1
    [
      "Provide a comprehensive overview of quantum computing, its working principles, and discuss its potential implications for the field of cryptography, including the risks and opportunities it presents.",
      "Kuantum hesaplama nedir, nasıl çalışır? Şifreleme alanındaki potansiyel etkilerini, sunduğu riskler ve fırsatlarla birlikte açıklayın.",
      "Kvant hesablama nədir, necə işləyir? Şifrələmə sahəsində potensial təsirlərini, yaratdığı risklər və imkanlarla birlikdə izah edin."
    ],
    
    // Block 2
    [
      "Compare various machine learning algorithms used for image recognition by analyzing their architectures, strengths, weaknesses, and best-use cases, such as convolutional neural networks (CNNs) and transformers.",
      "Görüntü tanıma için kullanılan makine öğrenimi algoritmalarını karşılaştırın; CNN'ler ve transformerlar gibi mimarilerini, güçlü/zayıf yönlerini ve ideal kullanım alanlarını analiz edin.",
      "Şəkil tanıma üçün istifadə olunan maşın öyrənmə alqoritmlərini müqayisə edin; CNN-lər və transformerlar kimi arxitekturalarını, üstün/zəif tərəflərini və ideal istifadələrini təhlil edin."
    ],
    
    // Block 3
    [
      "Examine the societal and ethical consequences of artificial general intelligence, addressing potential benefits, risks, and its integration into sectors such as healthcare, defense, and education.",
      "Yapay genel zekanın toplum üzerindeki etkilerini inceleyin; sağlık, savunma ve eğitim gibi sektörlerde entegrasyonunun potansiyel faydalarını ve risklerini ele alın.",
      "Ümumi süni intellektin cəmiyyətə təsirlərini təhlil edin; sağlamlıq, müdafiə və təhsil kimi sahələrdə inteqrasiyasının potensial fayda və risklərini nəzərdən keçirin."
    ],
  
    // Block 4
    [
      "Discuss the most recent advancements in renewable energy technology, highlighting specific innovations like floating solar farms or advanced wind turbines and analyzing their global environmental and economic impacts.",
      "Yenilenebilir enerji teknolojilerindeki son gelişmeleri tartışın; yüzer güneş panelleri veya gelişmiş rüzgar türbinleri gibi yenilikçi çözümleri ve küresel çevresel/ekonomik etkilerini inceleyin.",
      "Bərpa olunan enerji texnologiyalarındakı ən son inkişafları müzakirə edin; üzən günəş panelləri və ya qabaqcıl külək turbinləri kimi yenilikçi həlləri və qlobal ekoloji/iqtisadi təsirləri təhlil edin."
    ],
    
    // Block 5
    [
      "Define blockchain technology, explain its core principles, and explore its applications beyond cryptocurrency, particularly in industries like supply chain management, healthcare, and digital identity verification.",
      "Blockchain teknolojisini tanımlayın, temel prensiplerini açıklayın ve kripto para birimlerinin ötesindeki kullanım alanlarını; özellikle tedarik zinciri yönetimi, sağlık ve dijital kimlik doğrulama sektörlerindeki uygulamalarını ele alın.",
      "Blockchain texnologiyasını izah edin, əsas prinsiplərini açıqlayın və onun kriptovalyutadan kənar tətbiqlərini; xüsusən təchizat zənciri idarəçiliyi, sağlamlıq və rəqəmsal şəxsiyyət doğrulama sahələrindəki tətbiqlərini nəzərdən keçirin."
    ],
    
    // Block 6
    [
      "Analyze the ethical challenges posed by genetic engineering, including specific case studies of CRISPR technology, potential benefits like disease eradication, and risks such as unintended genetic consequences.",
      "Genetik mühendislikteki etik zorlukları analiz edin; CRISPR teknolojisi gibi spesifik örnekler üzerinden, hastalıkların ortadan kaldırılması gibi faydaları ve istenmeyen genetik sonuçlar gibi riskleri tartışın.",
      "Genetik mühəndislikdə etik məsələləri analiz edin; CRISPR texnologiyası kimi spesifik nümunələr vasitəsilə, xəstəliklərin aradan qaldırılması kimi faydalar və arzuolunmaz genetik nəticələr kimi riskləri müzakirə edin."
    ],
  
    // Block 7
    [
      "Assess the influence of social media on mental health by examining both positive impacts like community building and awareness and negative outcomes like addiction and misinformation.",
      "Sosyal medyanın mental sağlık üzerindeki etkilerini değerlendirin; topluluk oluşturma ve farkındalık yaratma gibi olumlu etkiler ile bağımlılık ve yanlış bilgi yayılması gibi olumsuz sonuçları analiz edin.",
      "Sosial medianın zehni sağlamlıq üzərindəki təsirlərini qiymətləndirin; icma quruculuğu və maarifləndirmə kimi müsbət təsirlər və asılılıq, həmçinin yanlış məlumatların yayılması kimi mənfi nəticələri təhlil edin."
    ],
    
    // Block 8
    [
      "Simplify Einstein's theory of relativity by focusing on its key principles like the relationship between space, time, and gravity, and provide real-world examples such as GPS technology.",
      "Einstein'ın görelilik teorisini basitleştirerek; uzay, zaman ve yerçekimi arasındaki ilişki gibi ana prensiplere odaklanın ve GPS teknolojisi gibi gerçek dünya örnekleriyle açıklayın.",
      "Einşteynin nisbilik nəzəriyyəsini sadələşdirərək; məkan, zaman və cazibə qüvvəsi arasındakı əlaqə kimi əsas prinsiplərə diqqət yetirin və GPS texnologiyası kimi real dünya nümunələri ilə izah edin."
    ],
  
    // Block 9
    [
      "Speculate on the future of space exploration by analyzing current trends like reusable rockets, emerging technologies such as nuclear propulsion, and the challenges of human colonization on Mars.",
      "Uzay keşfinin geleceği hakkında spekülasyon yapın; yeniden kullanılabilir roketler gibi mevcut trendleri, nükleer itki gibi yeni teknolojileri ve Mars'ta insan kolonizasyonunun zorluklarını analiz edin.",
      "Kosmik araşdırmaların gələcəyi haqqında təxminlər edin; təkrar istifadə edilə bilən raketlər kimi mövcud trendləri, nüvə hərəkətvericisi kimi yeni texnologiyaları və Marsda insan kolonizasiyasının çətinliklərini təhlil edin."
    ],
  
    // New Professional Prompts
    [
      "Evaluate the role of artificial intelligence in the future of education, detailing opportunities such as personalized learning and challenges like algorithmic bias or data privacy concerns.",
      "Eğitimde yapay zekanın rolünü değerlendirin; kişiselleştirilmiş öğrenim gibi fırsatları ve algoritmik önyargı veya veri gizliliği endişeleri gibi zorlukları detaylandırın.",
      "Təhsil sahəsində süni intellektin rolunu qiymətləndirin; fərdiləşdirilmiş təhsil kimi fürsətləri və alqoritmik qərəz və ya məlumat məxfiliyi narahatlıqları kimi çətinlikləri ətraflı izah edin."
    ],
  
    // Additional Professional Prompts
    [
      "Discuss the ethical concerns surrounding data privacy, including surveillance capitalism, and evaluate the role of government regulations like GDPR in ensuring digital security.",
      "Veri gizliliğiyle ilgili etik endişeleri tartışın; gözetim kapitalizmi gibi konuları ele alın ve GDPR gibi hükümet düzenlemelerinin dijital güvenliği sağlamadaki rolünü değerlendirin.",
      "Məlumat gizliliyi ilə bağlı etik narahatlıqları müzakirə edin; nəzarət kapitalizmi kimi məsələləri nəzərdən keçirin və GDPR kimi hökumət tənzimləmələrinin rəqəmsal təhlükəsizliyi təmin etməkdəki rolunu qiymətləndirin."
    ],
    
    // Block 12
    [
      "Explain the importance of emotional intelligence in leadership by providing case studies and examples of its impact on team motivation, conflict resolution, and decision-making.",
      "Liderlikte duygusal zekanın önemini açıklayın; ekip motivasyonu, çatışma çözümü ve karar verme üzerindeki etkilerine dair vaka çalışmaları ve örnekler sunun.",
      "Liderlikdə emosional intellektin əhəmiyyətini izah edin; komanda motivasiyası, münaqişə həlli və qərarvermə üzərindəki təsirlərinə dair nümunələr təqdim edin."
    ]
  ];

export function getRandomPromptSet(): string[] {
  return examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
}