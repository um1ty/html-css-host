const languages = {
        en: {
            name: "English",
            translations: {
                title: "Best Trusted Bottleneck Calculator",
                language: "Language",
                selectHardware: "Select Your Hardware",
                selectCpu: "CPU",
                selectGpu: "GPU",
                selectResolution: "Resolution",
                selectRam: "RAM",
                selectStorage: "Storage",
                selectPurpose: "Purpose",
                searchCpu: "Search CPU...",
                searchGpu: "Search GPU...",
                noCpuSelected: "No CPU Selected",
                noGpuSelected: "No GPU Selected",
                chooseResolution: "Choose Resolution...",
                selectResolutionFirst: "Select resolution to see details",
                ramDesc: "More RAM allows for smoother multitasking",
                storageDesc: "Faster storage reduces loading times",
                purposeDesc: "Different use cases prioritize different components",
                calculate: "Calculate Bottleneck",
                bottleneckPercentage: "Bottleneck Percentage",
                bottleneckComponent: "Bottleneck Component",
                recommendation: "Recommendation",
                performanceRating: "Performance Rating",
                upgradeGpu: "Consider upgrading your GPU",
                balanceSystem: "Balance your system",
                calculating: "Calculating...",
                fpsEstimation: "Gaming FPS Estimation",
                expectedFps: "Expected FPS",
                powerConsumption: "Power Consumption",
                streamingPerformance: "Streaming Performance",
                performanceDistribution: "Performance Distribution",
                gamingAssessment: "Gaming Performance Assessment",
                saveConfiguration: "Save Configuration",
                shareResults: "Share Results",
                exportReport: "Export Report",
                gamingRecommendations: "Gaming Recommendations",
                performanceComparison: "Performance Comparison",
                cpuBottleneck: "CPU Bottleneck",
                gpuBottleneck: "GPU Bottleneck",
                balanced: "Balanced System",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        es: {
            name: "Español",
            translations: {
                title: "Calculadora de Cuellos de Botella para Gaming",
                selectCpu: "Seleccionar CPU",
                selectGpu: "Seleccionar GPU",
                selectResolution: "Seleccionar Resolución",
                searchCpu: "Buscar CPU...",
                searchGpu: "Buscar GPU...",
                noCpuSelected: "CPU No Seleccionado",
                noGpuSelected: "GPU No Seleccionado",
                chooseResolution: "Elegir Resolución...",
                calculate: "Calcular Cuello de Botella",
                bottleneckAnalysis: "Análisis de Cuello de Botella",
                calculating: "Calculando...",
                fpsEstimation: "Estimación de FPS para Gaming",
                averageFps: "FPS Promedio",
                oneLows: "Mínimos 1%",
                pointOneLows: "Mínimos 0.1%",
                performanceComparison: "Comparación de Rendimiento",
                cpuBottleneck: "Cuello de Botella CPU",
                gpuBottleneck: "Cuello de Botella GPU",
                balanced: "Sistema Equilibrado",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        fr: {
            name: "Français",
            translations: {
                title: "Calculateur de Goulot d'Étranglement Gaming",
                selectCpu: "Sélectionner CPU",
                selectGpu: "Sélectionner GPU",
                selectResolution: "Sélectionner Résolution",
                searchCpu: "Rechercher CPU...",
                searchGpu: "Rechercher GPU...",
                noCpuSelected: "Aucun CPU Sélectionné",
                noGpuSelected: "Aucun GPU Sélectionné",
                chooseResolution: "Choisir Résolution...",
                calculate: "Calculer Goulot d'Étranglement",
                bottleneckAnalysis: "Analyse du Goulot d'Étranglement",
                calculating: "Calcul en cours...",
                fpsEstimation: "Estimation FPS Gaming",
                averageFps: "FPS Moyen",
                oneLows: "Minimums 1%",
                pointOneLows: "Minimums 0.1%",
                performanceComparison: "Comparaison de Performance",
                cpuBottleneck: "Goulot CPU",
                gpuBottleneck: "Goulot GPU",
                balanced: "Système Équilibré",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        de: {
            name: "Deutsch",
            translations: {
                title: "PC Gaming Flaschenhals Rechner",
                selectCpu: "CPU Auswählen",
                selectGpu: "GPU Auswählen",
                selectResolution: "Auflösung Auswählen",
                searchCpu: "CPU Suchen...",
                searchGpu: "GPU Suchen...",
                noCpuSelected: "Keine CPU Ausgewählt",
                noGpuSelected: "Keine GPU Ausgewählt",
                chooseResolution: "Auflösung Wählen...",
                calculate: "Flaschenhals Berechnen",
                bottleneckAnalysis: "Flaschenhals Analyse",
                calculating: "Berechnung...",
                fpsEstimation: "Gaming FPS Schätzung",
                averageFps: "Durchschnittliche FPS",
                oneLows: "1% Tiefpunkte",
                pointOneLows: "0.1% Tiefpunkte",
                performanceComparison: "Leistungsvergleich",
                cpuBottleneck: "CPU Flaschenhals",
                gpuBottleneck: "GPU Flaschenhals",
                balanced: "Ausgewogenes System",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        ru: {
            name: "Русский",
            translations: {
                title: "Калькулятор Узких Мест для Игр",
                selectCpu: "Выбрать CPU",
                selectGpu: "Выбрать GPU",
                selectResolution: "Выбрать Разрешение",
                searchCpu: "Поиск CPU...",
                searchGpu: "Поиск GPU...",
                noCpuSelected: "CPU Не Выбран",
                noGpuSelected: "GPU Не Выбран",
                chooseResolution: "Выберите Разрешение...",
                calculate: "Рассчитать Узкое Место",
                bottleneckAnalysis: "Анализ Узких Мест",
                calculating: "Расчет...",
                fpsEstimation: "Оценка FPS для Игр",
                averageFps: "Средний FPS",
                oneLows: "1% Минимумы",
                pointOneLows: "0.1% Минимумы",
                performanceComparison: "Сравнение Производительности",
                cpuBottleneck: "Узкое Место CPU",
                gpuBottleneck: "Узкое Место GPU",
                balanced: "Сбалансированная Система",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        zh: {
            name: "中文",
            translations: {
                title: "PC游戏瓶颈计算器",
                selectCpu: "选择CPU",
                selectGpu: "选择GPU",
                selectResolution: "选择分辨率",
                searchCpu: "搜索CPU...",
                searchGpu: "搜索GPU...",
                noCpuSelected: "未选择CPU",
                noGpuSelected: "未选择GPU",
                chooseResolution: "选择分辨率...",
                calculate: "计算瓶颈",
                bottleneckAnalysis: "瓶颈分析",
                calculating: "计算中...",
                fpsEstimation: "游戏FPS估算",
                averageFps: "平均FPS",
                oneLows: "1%最低值",
                pointOneLows: "0.1%最低值",
                performanceComparison: "性能对比",
                cpuBottleneck: "CPU瓶颈",
                gpuBottleneck: "GPU瓶颈",
                balanced: "平衡系统",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        ja: {
            name: "日本語",
            translations: {
                title: "PCゲーミングボトルネック計算機",
                selectCpu: "CPUを選択",
                selectGpu: "GPUを選択",
                selectResolution: "解像度を選択",
                searchCpu: "CPUを検索...",
                searchGpu: "GPUを検索...",
                noCpuSelected: "CPU未選択",
                noGpuSelected: "GPU未選択",
                chooseResolution: "解像度を選択...",
                calculate: "ボトルネックを計算",
                bottleneckAnalysis: "ボトルネック分析",
                calculating: "計算中...",
                fpsEstimation: "ゲーミングFPS推定",
                averageFps: "平均FPS",
                oneLows: "1%最低値",
                pointOneLows: "0.1%最低値",
                performanceComparison: "性能比較",
                cpuBottleneck: "CPUボトルネック",
                gpuBottleneck: "GPUボトルネック",
                balanced: "バランス取れたシステム",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        ar: {
            name: "العربية",
            translations: {
                title: "حاسبة اختناق الألعاب",
                selectCpu: "اختر المعالج",
                selectGpu: "اختر كرت الرسوميات",
                selectResolution: "اختر الدقة",
                searchCpu: "البحث عن معالج...",
                searchGpu: "البحث عن كرت رسوميات...",
                noCpuSelected: "لم يتم اختيار معالج",
                noGpuSelected: "لم يتم اختيار كرت رسوميات",
                chooseResolution: "اختر الدقة...",
                calculate: "حساب الاختناق",
                bottleneckAnalysis: "تحليل الاختناق",
                calculating: "يحسب...",
                fpsEstimation: "تقدير إطارات الألعاب",
                averageFps: "متوسط الإطارات",
                oneLows: "أدنى 1%",
                pointOneLows: "أدنى 0.1%",
                performanceComparison: "مقارنة الأداء",
                cpuBottleneck: "اختناق المعالج",
                gpuBottleneck: "اختناق كرت الرسوميات",
                balanced: "نظام متوازن",
                cpu: "المعالج",
                gpu: "كرت الرسوميات",
            },
        },
        hi: {
            name: "हिंदी",
            translations: {
                title: "PC गेमिंग बाधक कैलकुलेटर",
                selectCpu: "CPU चुनें",
                selectGpu: "GPU चुनें",
                selectResolution: "रिज़ॉल्यूशन चुनें",
                searchCpu: "CPU खोजें...",
                searchGpu: "GPU खोजें...",
                noCpuSelected: "कोई CPU नहीं चुना",
                noGpuSelected: "कोई GPU नहीं चुना",
                chooseResolution: "रिज़ॉल्यूशन चुनें...",
                calculate: "बाधक की गणना करें",
                bottleneckAnalysis: "बाधक विश्लेषण",
                calculating: "गणना की जा रही है...",
                fpsEstimation: "गेमिंग FPS अनुमान",
                averageFps: "औसत FPS",
                oneLows: "1% न्यूनतम",
                pointOneLows: "0.1% न्यूनतम",
                performanceComparison: "प्रदर्शन तुलना",
                cpuBottleneck: "CPU बाधक",
                gpuBottleneck: "GPU बाधक",
                balanced: "संतुलित सिस्टम",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        pt: {
            name: "Português",
            translations: {
                title: "Calculadora de Gargalo Gaming",
                selectCpu: "Selecionar CPU",
                selectGpu: "Selecionar GPU",
                selectResolution: "Selecionar Resolução",
                searchCpu: "Procurar CPU...",
                searchGpu: "Procurar GPU...",
                noCpuSelected: "CPU Não Selecionado",
                noGpuSelected: "GPU Não Selecionado",
                chooseResolution: "Escolher Resolução...",
                calculate: "Calcular Gargalo",
                bottleneckAnalysis: "Análise de Gargalo",
                calculating: "Calculando...",
                fpsEstimation: "Estimativa FPS Gaming",
                averageFps: "FPS Médio",
                oneLows: "Mínimos 1%",
                pointOneLows: "Mínimos 0.1%",
                performanceComparison: "Comparação de Performance",
                cpuBottleneck: "Gargalo CPU",
                gpuBottleneck: "Gargalo GPU",
                balanced: "Sistema Equilibrado",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        bn: {
            name: "বাংলা",
            translations: {
                title: "PC গেমিং বাধক ক্যালকুলেটর",
                selectCpu: "CPU নির্বাচন করুন",
                selectGpu: "GPU নির্বাচন করুন",
                selectResolution: "রেজোলিউশন নির্বাচন করুন",
                searchCpu: "CPU খুঁজুন...",
                searchGpu: "GPU খুঁজুন...",
                noCpuSelected: "কোন CPU নির্বাচিত নয়",
                noGpuSelected: "কোন GPU নির্বাচিত নয়",
                chooseResolution: "রেজোলিউশন বেছে নিন...",
                calculate: "বাধক গণনা করুন",
                bottleneckAnalysis: "বাধক বিশ্লেষণ",
                calculating: "গণনা করা হচ্ছে...",
                fpsEstimation: "গেমিং FPS অনুমান",
                averageFps: "গড় FPS",
                oneLows: "১% সর্বনিম্ন",
                pointOneLows: "০.১% সর্বনিম্ন",
                performanceComparison: "কর্মক্ষমতা তুলনা",
                cpuBottleneck: "CPU বাধক",
                gpuBottleneck: "GPU বাধক",
                balanced: "সন্তুলিত সিস্টেম",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        tr: {
            name: "Türkçe",
            translations: {
                title: "PC Oyun Darboğaz Hesaplayıcısı",
                selectCpu: "CPU Seç",
                selectGpu: "GPU Seç",
                selectResolution: "Çözünürlük Seç",
                searchCpu: "CPU Ara...",
                searchGpu: "GPU Ara...",
                noCpuSelected: "CPU Seçilmedi",
                noGpuSelected: "GPU Seçilmedi",
                chooseResolution: "Çözünürlük Seçin...",
                calculate: "Darboğazı Hesapla",
                bottleneckAnalysis: "Darboğaz Analizi",
                calculating: "Hesaplanıyor...",
                fpsEstimation: "Oyun FPS Tahmini",
                averageFps: "Ortalama FPS",
                oneLows: "%1 En Düşük",
                pointOneLows: "%0.1 En Düşük",
                performanceComparison: "Performans Karşılaştırması",
                cpuBottleneck: "CPU Darboğazı",
                gpuBottleneck: "GPU Darboğazı",
                balanced: "Dengeli Sistem",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        ur: {
            name: "اردو",
            translations: {
                title: "PC گیمنگ رکاوٹ کیلکولیٹر",
                selectCpu: "CPU منتخب کریں",
                selectGpu: "GPU منتخب کریں",
                selectResolution: "ریزولیوشن منتخب کریں",
                searchCpu: "CPU تلاش کریں...",
                searchGpu: "GPU تلاش کریں...",
                noCpuSelected: "کوئی CPU منتخب نہیں",
                noGpuSelected: "کوئی GPU منتخب نہیں",
                chooseResolution: "ریزولیوشن چنیں...",
                calculate: "رکاوٹ کا حساب لگائیں",
                bottleneckAnalysis: "رکاوٹ کا تجزیہ",
                calculating: "حساب لگایا جا رہا ہے...",
                fpsEstimation: "گیمنگ FPS تخمینہ",
                averageFps: "اوسط FPS",
                oneLows: "1% کم سے کم",
                pointOneLows: "0.1% کم سے کم",
                performanceComparison: "کارکردگی کا موازنہ",
                cpuBottleneck: "CPU رکاوٹ",
                gpuBottleneck: "GPU رکاوٹ",
                balanced: "متوازن سسٹم",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
        vi: {
            name: "Tiếng Việt",
            translations: {
                title: "Máy Tính Nghẽn Cổ Chai Gaming PC",
                selectCpu: "Chọn CPU",
                selectGpu: "Chọn GPU",
                selectResolution: "Chọn Độ Phân Giải",
                searchCpu: "Tìm CPU...",
                searchGpu: "Tìm GPU...",
                noCpuSelected: "Chưa Chọn CPU",
                noGpuSelected: "Chưa Chọn GPU",
                chooseResolution: "Chọn Độ Phân Giải...",
                calculate: "Tính Cổ Chai",
                bottleneckAnalysis: "Phân Tích Cổ Chai",
                calculating: "Đang Tính...",
                fpsEstimation: "Ước Tính FPS Gaming",
                averageFps: "FPS Trung Bình",
                oneLows: "1% Thấp Nhất",
                pointOneLows: "0.1% Thấp Nhất",
                performanceComparison: "So Sánh Hiệu Suất",
                cpuBottleneck: "Cổ Chai CPU",
                gpuBottleneck: "Cổ Chai GPU",
                balanced: "Hệ Thống Cân Bằng",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
         ko: {
        name: "한국어",
        translations: {
            title: "PC 게이밍 병목현상 계산기",
            selectCpu: "CPU 선택",
            selectGpu: "GPU 선택",
            selectResolution: "해상도 선택",
            searchCpu: "CPU 검색...",
            searchGpu: "GPU 검색...",
            noCpuSelected: "CPU 미선택",
            noGpuSelected: "GPU 미선택",
            chooseResolution: "해상도 선택...",
            calculate: "병목현상 계산",
            bottleneckAnalysis: "병목현상 분석",
            calculating: "계산 중...",
            fpsEstimation: "게이밍 FPS 추정",
            averageFps: "평균 FPS",
            oneLows: "1% 최저값",
            pointOneLows: "0.1% 최저값",
            performanceComparison: "성능 비교",
            cpuBottleneck: "CPU 병목현상",
            gpuBottleneck: "GPU 병목현상",
            balanced: "균형잡힌 시스템",
            cpu: "CPU",
            gpu: "GPU",
        },
    }, // ← Close Korean section here
    
    it: {
    name: "Italiano",
    translations: {
        title: "Miglior Calcolatore di Collo di Bottiglia Affidabile",
        language: "Lingua",
        selectHardware: "Seleziona il Tuo Hardware",
        selectCpu: "Seleziona CPU",
        selectGpu: "Seleziona GPU",
        selectResolution: "Seleziona Risoluzione",
        selectRam: "Seleziona RAM",
        selectStorage: "Seleziona Archiviazione",
        selectPurpose: "Scopo",
        searchCpu: "Cerca CPU...",
        searchGpu: "Cerca GPU...",
        noCpuSelected: "CPU Non Selezionata",
        noGpuSelected: "GPU Non Selezionata",
        chooseResolution: "Scegli Risoluzione...",
        selectResolutionFirst: "Seleziona risoluzione per vedere i dettagli",
        ramDesc: "Più RAM consente un multitasking più fluido",
        storageDesc: "Un'archiviazione più veloce riduce i tempi di caricamento",
        purposeDesc: "Diversi casi d'uso danno priorità a componenti diversi",
        calculate: "Calcola Collo di Bottiglia",
        bottleneckPercentage: "Percentuale Collo di Bottiglia",
        bottleneckComponent: "Componente Collo di Bottiglia",
        recommendation: "Raccomandazione",
        performanceRating: "Valutazione Prestazioni",
        upgradeGpu: "Considera di aggiornare la tua GPU",
        balanceSystem: "Bilancia il tuo sistema",
        calculating: "Calcolando...",
        fpsEstimation: "Stima FPS Gaming",
        expectedFps: "FPS Attesi",
        powerConsumption: "Consumo Energetico",
        streamingPerformance: "Prestazioni Streaming",
        performanceDistribution: "Distribuzione Prestazioni",
        gamingAssessment: "Valutazione Prestazioni Gaming",
        saveConfiguration: "Salva Configurazione",
        shareResults: "Condividi Risultati",
        exportReport: "Esporta Report",
        gamingRecommendations: "Raccomandazioni Gaming",
        performanceComparison: "Confronto Prestazioni",
        cpuBottleneck: "Collo di Bottiglia CPU",
        gpuBottleneck: "Collo di Bottiglia GPU",
        balanced: "Sistema Bilanciato",
        cpu: "CPU",
        gpu: "GPU",
        // Additional translations from your existing Italian version
        bottleneckAnalysis: "Analisi Collo di Bottiglia",
        averageFps: "FPS Medio",
        oneLows: "1% Minimi",
        pointOneLows: "0.1% Minimi",
        },
        
    }, // ← Italian section at the same level as other languages
        th: {
            name: "ไทย",
            translations: {
                title: "เครื่องคิดเลขคอขวดเกมมิ่ง PC",
                selectCpu: "เลือก CPU",
                selectGpu: "เลือก GPU",
                selectResolution: "เลือกความละเอียด",
                searchCpu: "ค้นหา CPU...",
                searchGpu: "ค้นหา GPU...",
                noCpuSelected: "ไม่ได้เลือก CPU",
                noGpuSelected: "ไม่ได้เลือก GPU",
                chooseResolution: "เลือกความละเอียด...",
                calculate: "คำนวณคอขวด",
                bottleneckAnalysis: "วิเคราะห์คอขวด",
                calculating: "กำลังคำนวณ...",
                fpsEstimation: "ประเมิน FPS เกมมิ่ง",
                averageFps: "FPS เฉลี่ย",
                oneLows: "ค่าต่ำสุด 1%",
                pointOneLows: "ค่าต่ำสุด 0.1%",
                performanceComparison: "เปรียบเทียบประสิทธิภาพ",
                cpuBottleneck: "คอขวด CPU",
                gpuBottleneck: "คอขวด GPU",
                balanced: "ระบบสมดุล",
                cpu: "CPU",
                gpu: "GPU",
            },
        },
    };
    fallbackData = {
        cpus: [
            { name: "AMD Ryzen 9 7950X", score: 15200, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "Intel Core i9-13900K", score: 14800, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "AMD Ryzen 7 7800X3D", score: 13500, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "Intel Core i7-13700K", score: 13200, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "AMD Ryzen 5 7600X", score: 11800, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "Intel Core i5-13600K", score: 11500, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "AMD Ryzen 9 5950X", score: 12400, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "Intel Core i9-12900K", score: 12100, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "AMD Ryzen 7 5800X3D", score: 11200, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
            { name: "Intel Core i7-12700K", score: 10900, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/684271edd6c85512e60ccb01.png" },
        ],
        gpus: [
            { name: "NVIDIA RTX 4090", score: 24500, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "NVIDIA RTX 4080", score: 20200, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "NVIDIA RTX 4070 Ti", score: 17800, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "AMD RX 7900 XTX", score: 19500, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "AMD RX 7900 XT", score: 17200, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "NVIDIA RTX 4070", score: 15600, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "NVIDIA RTX 3080", score: 16800, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "NVIDIA RTX 3070", score: 14200, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "AMD RX 6800 XT", score: 15100, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
            { name: "NVIDIA RTX 3060 Ti", score: 12500, image: "https://storage.googleapis.com/msgsndr/3RZ3xFIZOD77cdK3GRzg/media/68426ce1f7e129c43178b743.png" },
        ],
        resolutions: [
            { name: "1080p (1920x1080)", factor: 1 },
            { name: "1440p (2560x1440)", factor: 1.6 },
            { name: "4K (3840x2160)", factor: 2.4 },
            { name: "Ultrawide 1440p (3440x1440)", factor: 1.8 },
            { name: "8K (7680x4320)", factor: 4.2 },
        ],
    };
let hardwareData = null,
    selectedCpu = null,
    selectedGpu = null,
    selectedResolution = null,
    currentLanguage = "en",
    speedometerChart = null,
    comparisonChart = null;
async function initializeApp() {
    try {
        await loadHardwareData();
    } catch (e) {
        console.warn("Failed to load from GitHub, using fallback data:", e), (hardwareData = fallbackData);
    }
    setupEventListeners(), populateDropdowns(), updateLanguage();
}
async function loadHardwareData() {
    try {
        var e = await fetch("https://raw.githubusercontent.com/um1ty/bottleneck-hardware-data/main/hardware-data.json");
        if (!e.ok) throw new Error("HTTP error! status: " + e.status);
        (hardwareData = await e.json()), console.log("Hardware data loaded from GitHub successfully");
    } catch (e) {
        throw (console.error("GitHub fetch failed:", e), e);
    }
}
function setupEventListeners() {
    document.getElementById("languageSelect").addEventListener("change", function (e) {
        (currentLanguage = e.target.value), updateLanguage();
    });
    const e = document.getElementById("cpuSearch"),
        t = document.getElementById("cpuDropdown"),
        a =
            (e.addEventListener("input", function (e) {
                filterDropdown("cpu", e.target.value, t);
            }),
            e.addEventListener("focus", function () {
                (t.style.display = "block"), filterDropdown("cpu", e.value, t);
            }),
            document.getElementById("gpuSearch")),
        n = document.getElementById("gpuDropdown");
    a.addEventListener("input", function (e) {
        filterDropdown("gpu", e.target.value, n);
    }),
        a.addEventListener("focus", function () {
            (n.style.display = "block"), filterDropdown("gpu", a.value, n);
        }),
        document.getElementById("resolutionSelect").addEventListener("change", function (t) {
            t.target.value && ((selectedResolution = hardwareData.resolutions.find((e) => e.name === t.target.value)), checkCalculateButton());
        }),
        document.getElementById("calculateBtn").addEventListener("click", calculateBottleneck),
        document.addEventListener("click", function (e) {
            e.target.closest(".dropdown-container") ||
                document.querySelectorAll(".dropdown-list").forEach((e) => {
                    e.style.display = "none";
                });
        });
}
function populateDropdowns() {
    const a = document.getElementById("resolutionSelect");
    hardwareData.resolutions.forEach((e) => {
        var t = document.createElement("option");
        (t.value = e.name), (t.textContent = e.name), a.appendChild(t);
    });
}
function filterDropdown(a, t, n) {
    n.innerHTML = "";
    var e = ("cpu" === a ? hardwareData.cpus : hardwareData.gpus).filter((e) => e.name.toLowerCase().includes(t.toLowerCase()));
    e.forEach((e) => {
        var t = document.createElement("div");
        (t.className = "dropdown-item"),
            (t.innerHTML = `
                    <img src="${e.image}" alt="${e.name}" class="dropdown-item-image" 
                         onerror="this.src='https://via.placeholder.com/30?text=${a.toUpperCase()}'">
                    <span>${e.name}</span>
                    <span class="score">Score: ${e.score}</span>
                `),
            t.addEventListener("click", () => selectHardware(a, e)),
            n.appendChild(t);
    }),
        0 === e.length && (n.innerHTML = '<div class="dropdown-item">No results found</div>'),
        (n.style.display = "block");
}
function selectHardware(e, t) {
    "cpu" === e
        ? ((selectedCpu = t),
          (document.getElementById("cpuSearch").value = t.name),
          (document.getElementById("cpuDropdown").style.display = "none"),
          (document.getElementById("cpuDisplay").innerHTML = `
                    <img src="${t.image}" alt="${t.name}" class="hardware-image"
                         onerror="this.src='https://via.placeholder.com/150?text=CPU'">
                    <p class="hardware-name">${t.name}</p>
                    <p class="hardware-score">Score: ${t.score}</p>
                `))
        : "gpu" === e &&
          ((selectedGpu = t),
          (document.getElementById("gpuSearch").value = t.name),
          (document.getElementById("gpuDropdown").style.display = "none"),
          (document.getElementById("gpuDisplay").innerHTML = `
                    <img src="${t.image}" alt="${t.name}" class="hardware-image"
                         onerror="this.src='https://via.placeholder.com/150?text=GPU'">
                    <p class="hardware-name">${t.name}</p>
                    <p class="hardware-score">Score: ${t.score}</p>
                `)),
        checkCalculateButton();
}
function checkCalculateButton() {
    var e = document.getElementById("calculateBtn");
    selectedCpu && selectedGpu && selectedResolution ? ((e.disabled = !1), e.classList.add("enabled")) : ((e.disabled = !0), e.classList.remove("enabled"));
}
function calculateBottleneck() {
    if (selectedCpu && selectedGpu && selectedResolution) {
        const m = document.getElementById("calculateBtn"),
            p = m.innerHTML;
        (m.innerHTML = '<span class="btn-icon">⚡</span><span class="btn-text">Analyzing...</span>'),
            (m.disabled = !0),
            requestAnimationFrame(() => {
                const e = document.getElementById("resultsSection");
                (e.style.display = "block"),
                    (e.style.opacity = "0"),
                    (e.style.transform = "translateY(20px)"),
                    setTimeout(() => {
                        (e.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"), (e.style.opacity = "1"), (e.style.transform = "translateY(0)");
                    }, 50),
                    setTimeout(() => {
                        e.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    }, 300);
                var t = parseInt(document.getElementById("ramSelect").value),
                    a = document.getElementById("storageSelect").value,
                    n = document.getElementById("purposeSelect").value,
                    o = selectedCpu.score,
                    s = selectedGpu.score,
                    r = selectedResolution.factor;
                let i = o,
                    l = s / r;
                switch (n) {
                    case "streaming":
                        i *= 1.2;
                        break;
                    case "editing":
                        i *= 1.3;
                        break;
                    case "productivity":
                        i *= 1.1;
                }
                t < 16 && (i *= 0.9), 32 <= t && (i *= 1.05), "nvme" === a ? ((i *= 1.02), (l *= 1.01)) : "hdd" === a && (i *= 0.95);
                (o = Math.abs(i - l)), (s = Math.max(i, l)), (t = Math.round((o / s) * 100));
                let c, u, d;
                (d =
                    i < l
                        ? ((c = "CPU"), (u = "cpuBottleneck"), "Consider upgrading your CPU")
                        : l < i
                        ? ((c = "GPU"), (u = "gpuBottleneck"), "Consider upgrading your GPU")
                        : ((c = "Balanced"), (u = "balanced"), "Your system is well balanced")),
                    updateAnalysisCards(t, c, d),
                    updateFPSEstimates(i, l, r, n),
                    updatePerformanceDistribution(i, l),
                    createGamingAssessmentChart(i, l, t),
                    generateGamingRecommendations(t, c, n),
                    generateSystemOptimizations(i, l, n),
                    generateUpgradeRoadmap(t, c, selectedCpu, selectedGpu),
                    setTimeout(() => {
                        (m.innerHTML = p), (m.disabled = !1), m.classList.add("enabled");
                    }, 1500);
            });
    }
}
function updateAnalysisCards(e, t, a) {
    document.getElementById("bottleneckPercentage").textContent = e + "%";
    var n = document.getElementById("bottleneckStatus");
    50 < e
        ? ((n.style.background = "#ef4444"), (n.style.boxShadow = "0 0 10px rgba(239, 68, 68, 0.6)"))
        : 25 < e
        ? ((n.style.background = "#f97316"), (n.style.boxShadow = "0 0 10px rgba(249, 115, 22, 0.6)"))
        : ((n.style.background = "#22c55e"), (n.style.boxShadow = "0 0 10px rgba(34, 197, 94, 0.6)"));
    document.getElementById("bottleneckBar").style.width = e + "%";
    var n = document.querySelector(".component-name"),
        o = document.querySelector(".component-suggestion"),
        n = ((n.textContent = t + " is the bottleneck"), (o.textContent = a), document.querySelector(".rec-text")),
        t = ((n.textContent = e < 20 ? "Excellent balance - ready for high-end gaming" : e < 40 ? "Good balance - minor optimization possible" : "Significant bottleneck - upgrade recommended"), document.querySelector(".rating-value")),
        o = document.querySelectorAll(".star");
    let s, r;
    (r = e < 15 ? ((s = "Excellent"), 5) : e < 30 ? ((s = "Good"), 4) : e < 50 ? ((s = "Fair"), 3) : e < 70 ? ((s = "Poor"), 2) : ((s = "Critical"), 1)),
        (t.textContent = s),
        o.forEach((e, t) => {
            e.textContent = t < r ? "⭐" : "☆";
        });
}
function updateFPSEstimates(e, t, a, n) {
    var o = Math.min(e, t),
        o = Math.round(o / (85 * a)),
        a = Math.round((e / 1e3) * 65) + Math.round((t / 1e3) * 220) + 100;
    let s;
    (s =
        "streaming" === n
            ? 120 <= o
                ? "Excellent - 60fps stream"
                : 90 <= o
                ? "Good - 60fps stream"
                : 60 <= o
                ? "Fair - 30fps stream"
                : "Poor - streaming difficult"
            : 120 <= o
            ? "Stream Ready - 60fps"
            : 90 <= o
            ? "Good - 60fps"
            : 60 <= o
            ? "Fair - 30fps"
            : "Not recommended"),
        (document.getElementById("avgFps").textContent = o + " FPS"),
        (document.getElementById("powerConsumption").textContent = a + "W"),
        (document.getElementById("streamingPerf").textContent = s),
        [{ element: document.querySelector(".fps-card .fps-quality"), fps: o }].forEach((e) => {
            90 <= e.fps
                ? ((e.element.textContent = "Excellent - Ultra Smooth"), (e.element.className = "fps-quality good"))
                : 60 <= e.fps
                ? ((e.element.textContent = "Good - Smooth"), (e.element.className = "fps-quality good"))
                : 30 <= e.fps
                ? ((e.element.textContent = "Fair - Playable"), (e.element.className = "fps-quality medium"))
                : ((e.element.textContent = "Poor - Choppy"), (e.element.className = "fps-quality poor"));
        });
}
function updatePerformanceDistribution(e, t) {
    var a = e + t,
        e = Math.round((e / a) * 100),
        t = Math.round((t / a) * 100);
    (document.querySelector(".cpu-fill").style.width = e + "%"),
        (document.querySelector(".gpu-fill").style.width = t + "%"),
        (document.querySelector(".cpu-bar .bar-value").textContent = e + "%"),
        (document.querySelector(".gpu-bar .bar-value").textContent = t + "%");
}
function createGamingAssessmentChart(s, r, i) {
    setTimeout(() => {
        var e,
            t,
            a,
            n,
            o = document.getElementById("assessmentChart");
        o &&
            ((o = o.getContext("2d")),
            window.assessmentChart && window.assessmentChart.destroy(),
            (e = Math.min((s / 25e3) * 100, 100)),
            (t = Math.min((r / 3e4) * 100, 100)),
            (a = Math.max(100 - i, 0)),
            (n = Math.min(((s + r) / 45e3) * 100, 100)),
            (window.assessmentChart = new Chart(o, {
                type: "radar",
                data: {
                    labels: ["CPU Performance", "GPU Performance", "System Balance", "Gaming Ready"],
                    datasets: [
                        {
                            label: "Performance Metrics",
                            data: [e, t, a, n],
                            backgroundColor: "rgba(0, 255, 255, 0.2)",
                            borderColor: "#00ffff",
                            borderWidth: 3,
                            pointBackgroundColor: "#00ffff",
                            pointBorderColor: "#ffffff",
                            pointBorderWidth: 2,
                            pointRadius: 6,
                        },
                    ],
                },
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    animation: { duration: 2e3, easing: "easeOutQuart" },
                    scales: {
                        r: {
                            beginAtZero: !0,
                            max: 100,
                            ticks: { color: "#a3a3a3", font: { family: "Orbitron", size: 10 }, stepSize: 20 },
                            grid: { color: "rgba(0, 255, 255, 0.3)" },
                            angleLines: { color: "rgba(0, 255, 255, 0.2)" },
                            pointLabels: { color: "#00ffff", font: { family: "Orbitron", size: 11, weight: "bold" } },
                        },
                    },
                    plugins: {
                        legend: { display: !1 },
                        tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            titleColor: "#00ffff",
                            bodyColor: "#ffffff",
                            borderColor: "#00ffff",
                            borderWidth: 1,
                            callbacks: {
                                label: function (e) {
                                    return e.parsed.r.toFixed(1) + "%";
                                },
                            },
                        },
                    },
                },
            })));
    }, 500);
}
function generateGamingRecommendations(e, a, o) {
    setTimeout(() => {
        const n = document.getElementById("recommendationsGrid");
        var e, t;
        n &&
            ((n.innerHTML = ""),
            (e = []),
            "GPU" === a
                ? (e.push({
                      title: "Recommended Games for Your Setup",
                      description: "These games are optimized for CPU performance and will run smoothly on your current configuration. They focus on gameplay mechanics rather than intensive graphics.",
                      games: ["Counter-Strike 2", "Valorant", "League of Legends", "Minecraft", "Rocket League", "Dota 2", "Team Fortress 2", "Fall Guys"],
                  }),
                  e.push({
                      title: "GPU Upgrade Path",
                      description: "To unlock modern AAA gaming at high settings, consider these GPU upgrades based on your budget and performance needs.",
                      games: ["RTX 4060 (Budget)", "RTX 4070 (1440p)", "RTX 4070 Ti (High-end)", "RTX 4080 (4K Ready)", "RTX 4090 (Enthusiast)"],
                  }),
                  e.push({
                      title: "Graphics Settings Optimization",
                      description: "Optimize these settings in GPU-intensive games to maintain smooth performance while improving visual quality.",
                      games: ["Lower Anti-Aliasing", "Reduce Shadow Quality", "Optimize Ray Tracing", "Use DLSS/FSR", "Adjust Texture Quality"],
                  }))
                : "CPU" === a
                ? (e.push({
                      title: "GPU-Intensive Games Perfect for Your Setup",
                      description: "Your powerful GPU can handle these graphically demanding games. These titles will showcase your graphics card's capabilities.",
                      games: ["Cyberpunk 2077", "Red Dead Redemption 2", "The Witcher 3", "Assassin's Creed Valhalla", "Far Cry 6", "Metro Exodus", "Control", "Death Stranding"],
                  }),
                  e.push({
                      title: "CPU Upgrade Recommendations",
                      description: "Upgrade to these CPUs to eliminate bottlenecks and unlock your GPU's full potential for high refresh rate gaming.",
                      games: ["Ryzen 7 7800X3D (Gaming)", "Intel i7-13700K (Balanced)", "Ryzen 9 7900X (Productivity)", "Intel i9-13900K (Enthusiast)", "Ryzen 5 7600X (Budget)"],
                  }),
                  e.push({
                      title: "CPU Optimization Tips",
                      description: "Optimize your system to reduce CPU load and improve gaming performance with these tweaks.",
                      games: ["Close Background Apps", "Update Drivers", "Enable Game Mode", "Overclock RAM", "Disable Windows Animations"],
                  }))
                : (e.push({
                      title: "Balanced Gaming Experience",
                      description: "Your well-balanced system can handle the latest AAA games at optimal settings. Enjoy these demanding titles without compromise.",
                      games: ["Baldur's Gate 3", "Starfield", "Hogwarts Legacy", "Elden Ring", "Call of Duty MW3", "Spider-Man Remastered", "God of War", "Horizon Zero Dawn"],
                  }),
                  e.push({
                      title: "Future-Proofing Components",
                      description: "Your system is excellently balanced. Consider these upgrades to maintain peak performance for future games.",
                      games: ["DDR5-6000 RAM", "PCIe 5.0 NVMe SSD", "High-End Air Cooler", "1440p 165Hz Monitor", "Premium Power Supply"],
                  }),
                  e.push({
                      title: "Advanced Gaming Features",
                      description: "Take advantage of cutting-edge gaming technologies with your balanced high-performance system.",
                      games: ["Ray Tracing Ultra", "DLSS 3 Frame Gen", "HDR Gaming", "VR Ready Setup", "4K Gaming Capable"],
                  })),
            "streaming" === o
                ? e.push({
                      title: "Streaming Optimization Guide",
                      description: "Optimize your setup for professional-quality streaming with these hardware and software recommendations.",
                      games: ["OBS Studio Setup", "NVENC H.264 Encoding", "Dual Monitor Setup", "Professional Microphone", "Ring Light Setup", "Capture Card (Console)", "High Upload Internet", "Stream Deck"],
                  })
                : "editing" === o
                ? e.push({
                      title: "Video Editing Acceleration",
                      description: "Enhance your video editing workflow with these performance optimizations and hardware recommendations.",
                      games: ["Adobe Premiere Pro", "DaVinci Resolve", "GPU Acceleration", "High-Speed Storage", "Color-Accurate Monitor", "Professional Audio Interface"],
                  })
                : "productivity" === o &&
                  e.push({
                      title: "Productivity Enhancement",
                      description: "Maximize your productivity with these software tools and hardware upgrades tailored for professional workflows.",
                      games: ["Multiple Monitor Setup", "Ergonomic Peripherals", "Professional Keyboard", "High-DPI Display", "Productivity Software Suite", "Backup Solutions"],
                  }),
            (t = selectedResolution.name).includes("4K")
                ? e.push({
                      title: "4K Gaming Optimization",
                      description: "Maximize your 4K gaming experience with these specific optimizations and settings for ultra-high resolution gaming.",
                      games: ["DLSS Quality Mode", "FSR Quality", "Optimized Ray Tracing", "High Refresh 4K Monitor", "DisplayPort 2.0 Cable", "GPU Overclocking"],
                  })
                : t.includes("1440p") &&
                  e.push({
                      title: "1440p High Refresh Gaming",
                      description: "Perfect your 1440p gaming setup for high refresh rate competitive and immersive gaming experiences.",
                      games: ["144Hz+ Monitor", "Low Latency Mode", "Competitive Settings", "G-Sync/FreeSync", "Fast Response Time", "High FPS Optimization"],
                  }),
            e.forEach((e, t) => {
                const a = document.createElement("div");
                (a.className = "recommendation-item"),
                    (a.style.opacity = "0"),
                    (a.style.transform = "translateY(20px)"),
                    (a.innerHTML = `
                        <div class="rec-title">${e.title}</div>
                        <div class="rec-description">${e.description}</div>
                        <div class="rec-games">
                            ${e.games.map((e) => `<span class="game-tag">${e}</span>`).join("")}
                        </div>
                    `),
                    n.appendChild(a),
                    setTimeout(() => {
                        (a.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"), (a.style.opacity = "1"), (a.style.transform = "translateY(0)");
                    }, 100 + 150 * t);
            }));
    }, 800);
}
function generateSystemOptimizations(e, t, a) {
    setTimeout(() => {
        var e = document.querySelector(".recommendations-section");
        if (e) {
            var t = document.createElement("div");
            (t.className = "optimization-section"),
                (t.innerHTML = `
                    <h3 data-translate="systemOptimizations">System Optimizations</h3>
                    <div class="optimization-grid" id="optimizationGrid">
                        <!-- Optimization items will be populated here -->
                    </div>
                `),
                e.insertAdjacentElement("afterend", t);
            const n = document.getElementById("optimizationGrid");
            e = [];
            e.push({
                category: "Windows Performance",
                icon: "⚙️",
                items: [
                    "Disable Windows animations and transparency",
                    "Set power plan to High Performance",
                    "Disable background apps in Privacy settings",
                    "Enable Game Mode in Gaming settings",
                    "Disable Windows Search indexing for games drive",
                    "Set virtual memory to system managed",
                ],
            }),
                e.push({
                    category: "Driver & Software",
                    icon: "🔧",
                    items: [
                        "Update GPU drivers to latest version",
                        "Install chipset drivers from motherboard manufacturer",
                        "Use DDU for clean GPU driver installation",
                        "Enable GPU scheduling in Graphics settings",
                        "Disable Windows Update for drivers",
                        "Install latest DirectX and Visual C++ redistributables",
                    ],
                }),
                e.push({
                    category: "Gaming Performance",
                    icon: "🎮",
                    items: [
                        "Enable XMP/DOCP profile for RAM",
                        "Set GPU to maximum performance mode",
                        "Disable V-Sync for competitive games",
                        "Use fullscreen exclusive mode",
                        "Close unnecessary programs before gaming",
                        "Set game processes to high priority",
                    ],
                }),
                e.forEach((e, t) => {
                    const a = document.createElement("div");
                    (a.className = "optimization-item"),
                        (a.style.opacity = "0"),
                        (a.style.transform = "translateX(-20px)"),
                        (a.innerHTML = `
                        <div class="opt-header">
                            <span class="opt-icon">${e.icon}</span>
                            <h4 class="opt-title">${e.category}</h4>
                        </div>
                        <ul class="opt-list">
                            ${e.items.map((e) => `<li>${e}</li>`).join("")}
                        </ul>
                    `),
                        n.appendChild(a),
                        setTimeout(() => {
                            (a.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"), (a.style.opacity = "1"), (a.style.transform = "translateX(0)");
                        }, 200 + 200 * t);
                });
        }
    }, 1200);
}
function generateUpgradeRoadmap(a, o, s, r) {
    setTimeout(() => {
        var e = document.querySelector(".optimization-section");
        if (e) {
            var t = document.createElement("div");
            (t.className = "roadmap-section"),
                (t.innerHTML = `
                    <h3 data-translate="upgradeRoadmap">Upgrade Roadmap</h3>
                    <div class="roadmap-timeline" id="roadmapTimeline">
                        <!-- Roadmap items will be populated here -->
                    </div>
                `),
                e.insertAdjacentElement("afterend", t);
            const n = document.getElementById("roadmapTimeline");
            e = [];
            a < 15
                ? (e.push({ phase: "Immediate (0-3 months)", priority: "Low", color: "#22c55e", upgrades: ["Monitor upgrade to higher refresh rate", "Better cooling solution", "Premium peripherals"] }),
                  e.push({ phase: "Short Term (3-12 months)", priority: "Optional", color: "#3b82f6", upgrades: ["Faster NVMe storage", "More RAM for future games", "Case with better airflow"] }),
                  e.push({ phase: "Long Term (1-2 years)", priority: "Future", color: "#8b5cf6", upgrades: ["Next-gen GPU when available", "Platform upgrade (new motherboard/CPU)", "DDR5 transition"] }))
                : a < 40
                ? (e.push(
                      "GPU" === o
                          ? { phase: "Immediate (0-3 months)", priority: "High", color: "#ef4444", upgrades: [`GPU upgrade (current: ${r.name})`, "Power supply upgrade if needed", "Monitor to match GPU capabilities"] }
                          : { phase: "Immediate (0-3 months)", priority: "High", color: "#ef4444", upgrades: [`CPU upgrade (current: ${s.name})`, "Motherboard if CPU incompatible", "RAM upgrade to match new CPU"] }
                  ),
                  e.push({ phase: "Short Term (3-12 months)", priority: "Medium", color: "#f97316", upgrades: ["Secondary component upgrade", "Storage optimization", "Cooling upgrade"] }),
                  e.push({ phase: "Long Term (1-2 years)", priority: "Planning", color: "#8b5cf6", upgrades: ["Complete system refresh", "Next-gen technologies", "Future-proofing upgrades"] }))
                : (e.push({ phase: "Immediate (0-1 month)", priority: "Critical", color: "#dc2626", upgrades: [`Primary ${o} upgrade`, "System rebalancing", "Performance optimization"] }),
                  e.push({ phase: "Short Term (1-6 months)", priority: "High", color: "#ef4444", upgrades: ["Secondary component upgrade", "Supporting hardware upgrades", "Bottleneck elimination"] }),
                  e.push({ phase: "Medium Term (6-18 months)", priority: "Medium", color: "#f97316", upgrades: ["System optimization", "Future-ready components", "Performance fine-tuning"] })),
                e.forEach((e, t) => {
                    const a = document.createElement("div");
                    (a.className = "roadmap-step"),
                        (a.style.opacity = "0"),
                        (a.style.transform = "translateY(30px)"),
                        (a.innerHTML = `
                        <div class="roadmap-connector" style="background: ${e.color}"></div>
                        <div class="roadmap-content">
                            <div class="roadmap-header">
                                <h4 class="roadmap-phase">${e.phase}</h4>
                                <span class="roadmap-priority" style="background: ${e.color}20; color: ${e.color}; border: 1px solid ${e.color}">${e.priority}</span>
                            </div>
                            <ul class="roadmap-upgrades">
                                ${e.upgrades.map((e) => `<li>${e}</li>`).join("")}
                            </ul>
                        </div>
                    `),
                        n.appendChild(a),
                        setTimeout(() => {
                            (a.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"), (a.style.opacity = "1"), (a.style.transform = "translateY(0)");
                        }, 300 + 300 * t);
                });
        }
    }, 1600);
}
function calculateFPS(e, t, a) {
    (e = Math.min(e, t)), (t = Math.round(e / (100 * a))), (e = Math.round(0.8 * t)), (a = Math.round(0.65 * t));
    function n(e) {
        return 60 <= e ? "fps-good" : 30 <= e ? "fps-medium" : "fps-poor";
    }
    var o = document.getElementById("avgFps"),
        s = document.getElementById("oneLows"),
        r = document.getElementById("pointOneLows");
    (o.textContent = t), (o.className = "fps-value " + n(t)), (s.textContent = e), (s.className = "fps-value " + n(e)), (r.textContent = a), (r.className = "fps-value " + n(a));
}
function createSpeedometerChart(e, t) {
    var a = document.getElementById("speedometerChart").getContext("2d"),
        e = (speedometerChart && speedometerChart.destroy(), { datasets: [{ data: [e, 100 - e], backgroundColor: [50 < e ? "#ff4757" : 25 < e ? "#ffa502" : "#2ed573", "rgba(255, 255, 255, 0.1)"], borderWidth: 0, cutout: "70%" }] });
    speedometerChart = new Chart(a, { type: "doughnut", data: e, options: { responsive: !0, maintainAspectRatio: !1, plugins: { legend: { display: !1 }, tooltip: { enabled: !1 } }, animation: { animateRotate: !0, duration: 2e3 } } });
}
function createComparisonChart(e, t) {
    var a = document.getElementById("comparisonChart").getContext("2d"),
        e =
            (comparisonChart && comparisonChart.destroy(),
            {
                labels: [languages[currentLanguage].translations.cpu, languages[currentLanguage].translations.gpu],
                datasets: [
                    {
                        label: "Performance Score",
                        data: [e, t],
                        backgroundColor: ["linear-gradient(45deg, #667eea 0%, #764ba2 100%)", "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)"],
                        borderColor: ["#667eea", "#f5576c"],
                        borderWidth: 2,
                        borderRadius: 10,
                    },
                ],
            });
    comparisonChart = new Chart(a, {
        type: "bar",
        data: e,
        options: {
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: { legend: { display: !1 }, tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)", titleColor: "#fff", bodyColor: "#fff", borderColor: "#667eea", borderWidth: 1 } },
            scales: { y: { beginAtZero: !0, grid: { color: "rgba(255, 255, 255, 0.1)" }, ticks: { color: "#fff" } }, x: { grid: { display: !1 }, ticks: { color: "#fff" } } },
            animation: { duration: 2e3, easing: "easeInOutQuart" },
        },
    });
}
function updateLanguage() {
    const a = languages[currentLanguage].translations;
    document.querySelectorAll("[data-translate]").forEach((e) => {
        var t = e.getAttribute("data-translate");
        a[t] && (e.textContent = a[t]);
    }),
        document.querySelectorAll("[data-translate-placeholder]").forEach((e) => {
            var t = e.getAttribute("data-translate-placeholder");
            a[t] && (e.placeholder = a[t]);
        });
    var e = document.getElementById("resolutionSelect");
    e.options[0] && (e.options[0].textContent = a.chooseResolution);
}
function setupActionButtons() {
    document.getElementById("saveConfig").addEventListener("click", function () {
        var e, t;
        selectedCpu && selectedGpu && selectedResolution
            ? ((e = {
                  cpu: selectedCpu.name,
                  gpu: selectedGpu.name,
                  resolution: selectedResolution.name,
                  ram: document.getElementById("ramSelect").value,
                  storage: document.getElementById("storageSelect").value,
                  purpose: document.getElementById("purposeSelect").value,
                  timestamp: new Date().toISOString(),
              }),
              (e = JSON.stringify(e, null, 2)),
              (e = new Blob([e], { type: "application/json" })),
              (e = URL.createObjectURL(e)),
              ((t = document.createElement("a")).href = e),
              (t.download = "pc-configuration.json"),
              t.click(),
              URL.revokeObjectURL(e))
            : alert("Please complete the hardware selection first.");
    }),
        document.getElementById("shareResults").addEventListener("click", function () {
            var e;
            selectedCpu && selectedGpu && selectedResolution
                ? ((e =
                      `🎮 My PC Gaming Setup Analysis:
🔥 CPU: ${selectedCpu.name}
⚡ GPU: ${selectedGpu.name}
🎯 Resolution: ${selectedResolution.name}
📊 Bottleneck: ${document.getElementById("bottleneckPercentage").textContent}
⭐ Rating: ${document.querySelector(".rating-value").textContent}

Check your setup at: ` + window.location.href),
                  navigator.share
                      ? navigator.share({ title: "PC Gaming Bottleneck Analysis", text: e, url: window.location.href })
                      : navigator.clipboard.writeText(e).then(() => {
                            alert("Results copied to clipboard!");
                        }))
                : alert("Please calculate bottleneck first.");
        }),
        document.getElementById("exportReport").addEventListener("click", function () {
            var e, t;
            selectedCpu && selectedGpu && selectedResolution
                ? ((e = generateDetailedReport()),
                  (e = new Blob([e], { type: "text/plain" })),
                  (e = URL.createObjectURL(e)),
                  ((t = document.createElement("a")).href = e),
                  (t.download = "gaming-performance-report.txt"),
                  t.click(),
                  URL.revokeObjectURL(e))
                : alert("Please calculate bottleneck first.");
        });
}
function generateDetailedReport() {
    var e = document.getElementById("bottleneckPercentage").textContent,
        t = document.querySelector(".rating-value").textContent,
        a = document.getElementById("avgFps").textContent,
        n = document.getElementById("powerConsumption").textContent,
        o = document.getElementById("streamingPerf").textContent;
    return `
===========================================
    PC GAMING PERFORMANCE ANALYSIS REPORT
===========================================

Generated: ${new Date().toLocaleString()}

HARDWARE CONFIGURATION:
----------------------
CPU: ${selectedCpu.name} (Score: ${selectedCpu.score})
GPU: ${selectedGpu.name} (Score: ${selectedGpu.score})
Resolution: ${selectedResolution.name}
RAM: ${document.getElementById("ramSelect").value} GB
Storage: ${document.getElementById("storageSelect").value.toUpperCase()}
Purpose: ${document.getElementById("purposeSelect").value}

PERFORMANCE ANALYSIS:
--------------------
Bottleneck Percentage: ${e}
Performance Rating: ${t}
Expected FPS: ${a}
Power Consumption: ${n}
Streaming Performance: ${o}

SYSTEM BALANCE:
--------------
CPU Performance: ${document.querySelector(".cpu-bar .bar-value").textContent}
GPU Performance: ${document.querySelector(".gpu-bar .bar-value").textContent}

RECOMMENDATIONS:
---------------
${document.querySelector(".rec-text").textContent}

COMPONENT ANALYSIS:
------------------
${document.querySelector(".component-name").textContent}
${document.querySelector(".component-suggestion").textContent}

===========================================
Report generated by Futuristic Bottleneck Calculator
Visit: ${window.location.href}
===========================================
            `.trim();
}
document.addEventListener("DOMContentLoaded", function () {
    initializeApp();
}),
    document.addEventListener("DOMContentLoaded", function () {
        loadHardwareData(), setupEventListeners(), setupActionButtons(), setLanguage("en");
    });
const gamePerformanceData = {
        cyberpunk2077: { baseFps: { low: 95, medium: 78, high: 62, ultra: 45 }, cpuIntensive: !0, vramUsage: { low: 6, medium: 8, high: 10, ultra: 12 }, rtSupport: !0, dlssSupport: !0, rtImpact: { medium: 0.75, high: 0.6, ultra: 0.45 } },
        rdr2: { baseFps: { low: 88, medium: 72, high: 58, ultra: 42 }, cpuIntensive: !0, vramUsage: { low: 5, medium: 7, high: 9, ultra: 11 }, rtSupport: !1, dlssSupport: !0, rtImpact: { medium: 1, high: 1, ultra: 1 } },
        witcher3: { baseFps: { low: 110, medium: 95, high: 75, ultra: 65 }, cpuIntensive: !1, vramUsage: { low: 4, medium: 6, high: 8, ultra: 10 }, rtSupport: !0, dlssSupport: !0, rtImpact: { medium: 0.8, high: 0.65, ultra: 0.5 } },
        gta5: { baseFps: { low: 125, medium: 105, high: 85, ultra: 70 }, cpuIntensive: !0, vramUsage: { low: 3, medium: 5, high: 7, ultra: 9 }, rtSupport: !1, dlssSupport: !1, rtImpact: { medium: 1, high: 1, ultra: 1 } },
        valorant: { baseFps: { low: 300, medium: 280, high: 250, ultra: 220 }, cpuIntensive: !0, vramUsage: { low: 2, medium: 3, high: 4, ultra: 5 }, rtSupport: !1, dlssSupport: !1, rtImpact: { medium: 1, high: 1, ultra: 1 } },
        csgo: { baseFps: { low: 350, medium: 320, high: 280, ultra: 250 }, cpuIntensive: !0, vramUsage: { low: 1, medium: 2, high: 3, ultra: 4 }, rtSupport: !1, dlssSupport: !1, rtImpact: { medium: 1, high: 1, ultra: 1 } },
        apex: { baseFps: { low: 165, medium: 145, high: 120, ultra: 100 }, cpuIntensive: !1, vramUsage: { low: 4, medium: 6, high: 8, ultra: 10 }, rtSupport: !1, dlssSupport: !0, rtImpact: { medium: 1, high: 1, ultra: 1 } },
        fortnite: { baseFps: { low: 200, medium: 170, high: 140, ultra: 110 }, cpuIntensive: !1, vramUsage: { low: 3, medium: 4, high: 6, ultra: 8 }, rtSupport: !0, dlssSupport: !0, rtImpact: { medium: 0.85, high: 0.7, ultra: 0.55 } },
        warzone: { baseFps: { low: 120, medium: 100, high: 80, ultra: 65 }, cpuIntensive: !0, vramUsage: { low: 6, medium: 8, high: 10, ultra: 12 }, rtSupport: !1, dlssSupport: !0, rtImpact: { medium: 1, high: 1, ultra: 1 } },
        minecraft: { baseFps: { low: 200, medium: 180, high: 160, ultra: 140 }, cpuIntensive: !0, vramUsage: { low: 2, medium: 3, high: 4, ultra: 6 }, rtSupport: !0, dlssSupport: !1, rtImpact: { medium: 0.5, high: 0.3, ultra: 0.2 } },
    },
    hardwareSpecs = { cpu: { name: "Intel Core i9-12900K", score: 12100, cores: 16, threads: 24 }, gpu: { name: "NVIDIA RTX 4090", score: 24500, vram: 24 } },
    upscalingData = {
        native: { multiplier: 1, renderScale: 100, quality: 100, latency: 0 },
        dlss_quality: { multiplier: 1.3, renderScale: 67, quality: 95, latency: 1 },
        dlss_balanced: { multiplier: 1.6, renderScale: 58, quality: 85, latency: 1.5 },
        dlss_performance: { multiplier: 2, renderScale: 50, quality: 75, latency: 2 },
        dlss_ultra_performance: { multiplier: 2.8, renderScale: 33, quality: 65, latency: 2.5 },
        fsr_quality: { multiplier: 1.2, renderScale: 77, quality: 85, latency: 0 },
        fsr_balanced: { multiplier: 1.4, renderScale: 67, quality: 75, latency: 0 },
        fsr_performance: { multiplier: 1.7, renderScale: 59, quality: 65, latency: 0 },
    };
let currentPerformance = { game: null, settings: "ultra", fps: 0, rtEnabled: !1, upscaling: "native" };
function runAssessment() {
    const e = document.getElementById("gameSelect"),
        t = document.getElementById("settingsSelect"),
        a = document.getElementById("loadingSpinner");
    e.value
        ? ((a.style.display = "inline-block"),
          (document.querySelector(".assessment-button").disabled = !0),
          setTimeout(() => {
              calculatePerformance(e.value, t.value), (a.style.display = "none"), (document.querySelector(".assessment-button").disabled = !1);
          }, 2e3))
        : alert("Please select a game first!");
}
function calculatePerformance(e, t) {
    var a,
        n,
        o,
        s,
        r,
        i,
        l,
        e = gamePerformanceData[e];
    e &&
        ((i = e.baseFps[t]),
        (a = Math.round(i * (e.cpuIntensive ? 0.9 : 1) * 1)),
        (n = Math.round(0.8 * a)),
        (o = Math.round(1.2 * a)),
        (s = (1e3 / a).toFixed(1)),
        (r = Math.min(95, Math.round((i / 300) * 100))),
        (i = Math.min(98, Math.round((i / 200) * 100))),
        (e = e.vramUsage[t]),
        (l = Math.round((e / hardwareSpecs.gpu.vram) * 100)),
        updateMetrics(a, n, o, s),
        updateUsageBars(r, i, e, l),
        updateBottleneckAnalysis(r, i, a, t),
        (currentPerformance = { game: gameSelect.value, settings: settingsSelect.value, fps: a, rtEnabled: !1, upscaling: "native" }),
        (document.getElementById("resultsSection").style.display = "block"));
}
function updateMetrics(e, t, a, n) {
    (document.getElementById("fpsValue").textContent = e),
        (document.getElementById("minFpsValue").textContent = t),
        (document.getElementById("maxFpsValue").textContent = a),
        (document.getElementById("frametimeValue").textContent = n + "ms");
}
function updateUsageBars(e, t, a, n) {
    (document.getElementById("cpuUsage").textContent = e + "%"),
        (document.getElementById("cpuBar").style.width = e + "%"),
        (document.getElementById("gpuUsage").textContent = t + "%"),
        (document.getElementById("gpuBar").style.width = t + "%"),
        (document.getElementById("vramUsage").textContent = a + " GB"),
        (document.getElementById("vramBar").style.width = n + "%");
}
function updateBottleneckAnalysis(e, t, a, n) {
    var o = document.getElementById("bottleneckIndicator"),
        s = document.getElementById("bottleneckText");
    let r = "low",
        i = "No Significant Bottleneck",
        l = "Excellent",
        c = "Ultra",
        u = 95,
        d = "None";
    var m = Math.abs(e - t);
    30 < m
        ? ((r = "high"), (d = t < e ? ((i = "CPU Bottleneck Detected"), "CPU Upgrade") : ((i = "GPU Bottleneck Detected"), "GPU Upgrade")), (u = 70))
        : 15 < m && ((r = "medium"), (i = "Minor Bottleneck"), (u = 85), (d = t < e ? "Consider CPU" : "Consider GPU")),
        a < 30 ? ((l = "Poor"), (c = "Low")) : a < 60 ? ((l = "Fair"), (c = "Medium")) : a < 100 && ((l = "Good"), (c = "High")),
        (o.className = "bottleneck-indicator bottleneck-" + r),
        (o.style.display = "flex"),
        (s.textContent = i),
        (document.getElementById("overallPerf").textContent = l),
        (document.getElementById("recommendedSettings").textContent = c),
        (document.getElementById("optimizationScore").textContent = u + "/100"),
        (document.getElementById("upgradePriority").textContent = d),
        updateRTDLSSRecommendations(a);
}
function updateRTDLSSRecommendations(e) {
    var t = currentPerformance.game,
        t = gamePerformanceData[t];
    let a = "Not Supported",
        n = "Not Supported";
    t && (t.rtSupport && (a = 90 < e ? "Ultra RT" : 60 < e ? "High RT" : 45 < e ? "Medium RT" : "RT Off"), t.dlssSupport) && (n = 100 < e ? "Native/Quality" : 60 < e ? "DLSS Quality" : 45 < e ? "DLSS Balanced" : "DLSS Performance"),
        (document.getElementById("rtRecommendation").textContent = a),
        (document.getElementById("dlssRecommendation").textContent = n);
}
function analyzeRayTracing() {
    if (currentPerformance.game) {
        var s = document.getElementById("rtToggle").value,
            r = gamePerformanceData[currentPerformance.game];
        if (r.rtSupport || "off" === s) {
            let e = 0,
                t = 0,
                a = 0,
                n = 60,
                o = "Standard";
            if ("off" !== s && r.rtSupport) {
                var i = currentPerformance.fps,
                    r = r.rtImpact[s] || 1,
                    r = Math.round(i * r);
                switch (((e = Math.round(((i - r) / i) * 100)), s)) {
                    case "medium":
                        (t = 25), (a = 45), (n = 75), (o = "Enhanced");
                        break;
                    case "high":
                        (t = 50), (a = 70), (n = 85), (o = "High Fidelity");
                        break;
                    case "ultra":
                        (t = 80), (a = 95), (n = 95), (o = "Ultra Realistic");
                }
                currentPerformance.rtEnabled = !0;
            } else (o = "Standard"), (n = 60), (currentPerformance.rtEnabled = !1);
            (document.getElementById("rtFpsImpact").textContent = 0 < e ? `-${e}%` : "0%"),
                (document.getElementById("rtQualityGain").textContent = 0 < t ? `+${t}%` : "0%"),
                (document.getElementById("rtCoreUsage").textContent = a + "%"),
                (document.getElementById("rtCoreBar").style.width = a + "%"),
                (document.getElementById("visualFidelity").textContent = o),
                (document.getElementById("fidelityBar").style.width = n + "%");
        } else alert("This game does not support Ray Tracing!");
    } else alert("Please run the main assessment first!");
}
function optimizeUpscaling() {
    if (currentPerformance.game) {
        var t = document.getElementById("upscalingMode").value,
            a = gamePerformanceData[currentPerformance.game],
            n = upscalingData[t];
        if (t.includes("dlss") && !a.dlssSupport) alert("This game does not support DLSS! Try FSR instead.");
        else {
            var a = currentPerformance.fps,
                o = Math.round(a * n.multiplier),
                o = Math.round(((o - a) / a) * 100);
            let e = 0;
            if (t.includes("dlss"))
                switch (t) {
                    case "dlss_quality":
                        e = 30;
                        break;
                    case "dlss_balanced":
                        e = 50;
                        break;
                    case "dlss_performance":
                        e = 70;
                        break;
                    case "dlss_ultra_performance":
                        e = 90;
                }
            (document.getElementById("upscalingBoost").textContent = 0 < o ? `+${o}%` : "0%"),
                (document.getElementById("renderScale").textContent = n.renderScale + "%"),
                (document.getElementById("aiLatency").textContent = n.latency + "ms"),
                (document.getElementById("imageQuality").textContent = n.quality + "%"),
                (document.getElementById("tensorUsage").textContent = e + "%"),
                (document.getElementById("tensorBar").style.width = e + "%"),
                (currentPerformance.upscaling = t);
        }
    } else alert("Please run the main assessment first!");
}
document.addEventListener("DOMContentLoaded", function () {
    const t = document.getElementById("mobile-toggle"),
        a = document.getElementById("nav-links"),
        n = document.querySelector(".futuristic-nav"),
        o =
            (t.addEventListener("click", function () {
                t.classList.toggle("active"), a.classList.toggle("active");
            }),
            document.querySelectorAll(".nav-link"));
    o.forEach((e) => {
        e.addEventListener("click", function () {
            t.classList.remove("active"), a.classList.remove("active"), o.forEach((e) => e.classList.remove("active")), this.classList.add("active");
        });
    }),
        window.addEventListener("scroll", function () {
            50 < window.scrollY ? n.classList.add("scrolled") : n.classList.remove("scrolled");
        }),
        document.addEventListener("click", function (e) {
            n.contains(e.target) || (t.classList.remove("active"), a.classList.remove("active"));
        });
}),
    document.addEventListener("DOMContentLoaded", function () {
        const t = document.getElementById("newsletter-submit"),
            a = document.getElementById("newsletter-email");
        t &&
            a &&
            (t.addEventListener("click", function () {
                var e = a.value.trim();
                e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
                    ? ((t.style.transform = "scale(0.95)"),
                      (t.innerHTML = '<span class="btn-text">SUBSCRIBED!</span>'),
                      setTimeout(() => {
                          (t.style.transform = "scale(1)"), (t.innerHTML = '<span class="btn-text">SUBSCRIBE</span><span class="btn-glow"></span>'), (a.value = "");
                      }, 2e3),
                      console.log("Newsletter subscription:", e))
                    : ((a.style.animation = "shake 0.5s ease-in-out"),
                      (a.style.borderColor = "#ff4444"),
                      setTimeout(() => {
                          (a.style.animation = ""), (a.style.borderColor = "rgba(0, 255, 255, 0.3)");
                      }, 500));
            }),
            a.addEventListener("keypress", function (e) {
                "Enter" === e.key && t.click();
            })),
            document.querySelectorAll('.footer-link[href^="#"]').forEach((e) => {
                e.addEventListener("click", function (e) {
                    e.preventDefault();
                    (e = this.getAttribute("href").substring(1)), (e = document.getElementById(e));
                    e && e.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            });
    });
