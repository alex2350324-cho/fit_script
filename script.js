/**
 * Fit Script - Core Logic
 */

const EXERCISE_DB = [
    // Chest
    { id: 1, name: '푸쉬업', category: '가슴', equipment: 'body', video: 'X0q9p6VqHqc', tips: '허리가 아래로 처지지 않게 코어에 힘을 주세요.', injuryAvoid: ['wrist'] },
    { id: 2, name: '딥스', category: '가슴', equipment: 'body', video: '2z8JmcrW-As', tips: '상체를 약간 숙여 가슴 하부에 자극을 느끼세요.', injuryAvoid: ['shoulder'] },
    { id: 3, name: '덤벨 프레스', category: '가슴', equipment: 'dumbbell', video: 'Vm9Z6A78mX0', tips: '덤벨을 내릴 때 가슴 근육이 충분히 이완되도록 합니다.', injuryAvoid: ['shoulder'] },
    { id: 4, name: '덤벨 플라이', category: '가슴', equipment: 'dumbbell', video: 'eGjt4lk6gjw', tips: '팔꿈치를 약간 굽혀 관절의 부담을 줄이세요.', injuryAvoid: ['shoulder'] },
    { id: 5, name: '벤치 프레스', category: '가슴', equipment: 'gym', video: 'rT7DgMEut5U', tips: '견갑골을 고정하고 바벨을 가슴 중앙으로 내립니다.', injuryAvoid: ['shoulder', 'wrist'] },

    // Back
    { id: 6, name: '풀업', category: '등', equipment: 'body', video: 'eGo4IYlbE5g', tips: '가슴을 바 쪽으로 당긴다는 느낌으로 올라가세요.', injuryAvoid: ['shoulder'] },
    { id: 7, name: '인버티드 로우', category: '등', equipment: 'body', video: 'OIdM7Sly79s', tips: '몸을 일직선으로 유지하며 가슴을 당기세요.', injuryAvoid: [] },
    { id: 8, name: '덤벨 로우', category: '등', equipment: 'dumbbell', video: '5Po_7I042Uo', tips: '팔꿈치를 옆구리에 붙여 등 근육을 수축하세요.', injuryAvoid: ['back'] },
    { id: 9, name: '데드리프트', category: '등', equipment: 'gym', video: 'ytGaGIn3SjE', tips: '허리를 곧게 펴고 하체의 힘으로 들어올리세요.', injuryAvoid: ['back', 'knee'] },

    // Lower Body
    { id: 10, name: '맨몸 스쿼트', category: '하체', equipment: 'body', video: 'aclHkVaku9U', tips: '무릎이 발끝보다 너무 나가지 않게 주의하세요.', injuryAvoid: ['knee'] },
    { id: 11, name: '런지', category: '하체', equipment: 'body', video: 'QOVaHwm-Q6U', tips: '상체를 수직으로 유지하며 천천히 내려가세요.', injuryAvoid: ['knee'] },
    { id: 12, name: '고블릿 스쿼트', category: '하체', equipment: 'dumbbell', video: 'MxsK_pI-hIs', tips: '덤벨을 가슴 앞에 붙여 중심을 잡으세요.', injuryAvoid: ['knee'] },
    { id: 13, name: '바벨 스쿼트', category: '하체', equipment: 'gym', video: '1oed-UmAxFs', tips: '코어에 힘을 주고 발바닥 전체로 지면을 미세요.', injuryAvoid: ['knee', 'back'] },

    // Shoulder
    { id: 14, name: '파이크 푸쉬업', category: '어깨', equipment: 'body', video: '88_Z1XWjIdM', tips: '엉덩이를 높이 들고 머리가 손 앞에 오게 내려가세요.', injuryAvoid: ['shoulder', 'wrist'] },
    { id: 15, name: '숄더 프레스', category: '어깨', equipment: 'dumbbell', video: 'qEwKCR5JCog', tips: '팔꿈치가 너무 뒤로 빠지지 않게 주의하세요.', injuryAvoid: ['shoulder'] },
    { id: 16, name: '레터럴 레이즈', category: '어깨', equipment: 'dumbbell', video: '3VQVv_u-n_4', tips: '무거운 무게보다 적절한 무게로 자극을 느끼세요.', injuryAvoid: ['shoulder'] },
    { id: 17, name: '밀리터리 프레스', category: '어깨', equipment: 'gym', video: '2yjwXTZQDDI', tips: '몸의 반동을 줄이고 어깨 힘에 집중하세요.', injuryAvoid: ['shoulder', 'back'] },

    // Core
    { id: 18, name: '플랭크', category: '코어', equipment: 'body', video: 'pvIjsGZxpS8', tips: '머리부터 발끝까지 일직선을 유지하세요.', injuryAvoid: ['wrist'] },
    { id: 19, name: '크런치', category: '코어', equipment: 'body', video: '5ER5Of4MO0g', tips: '상복부를 쥐어짜는 느낌으로 상체를 들어올리세요.', injuryAvoid: ['back'] },
    { id: 20, name: '덤벨 사이드 밴드', category: '코어', equipment: 'dumbbell', video: 'rV6vI6K6O4s', tips: '반대쪽 옆구리가 늘어나는 것을 느끼세요.', injuryAvoid: ['back'] },
    { id: 21, name: '케이블 크런치', category: '코어', equipment: 'gym', video: '8o-R_vT15o0', tips: '팔의 힘이 아닌 복근의 힘으로 당기세요.', injuryAvoid: ['back'] },

    // Cardio
    { id: 22, name: '버피 테스트', category: '유산소', equipment: 'body', video: 'Uly8j_L0WNo', tips: '착지 시 발바닥 전체를 사용하여 충격을 흡수하세요.', injuryAvoid: ['knee', 'wrist'] },
    { id: 23, name: '러닝머신', category: '유산소', equipment: 'gym', video: '8i3Vrd957Xk', tips: '가벼운 조깅부터 시작하여 속도를 높이세요.', injuryAvoid: ['knee'] },
    { id: 24, name: '실내 자전거', category: '유산소', equipment: 'gym', video: 'k8K8L7yv9qI', tips: '안장 높이를 무릎에 맞춰 조절하세요.', injuryAvoid: ['knee'] }
];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fit-form');
    const steps = document.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const resultSection = document.getElementById('result-section');
    const formSection = document.getElementById('form-section');
    const modal = document.getElementById('exercise-modal');
    const closeModal = document.querySelector('.close-modal');

    let currentStep = 0;

    // Step Navigation
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    function showStep(stepIdx) {
        steps.forEach((step, i) => {
            step.classList.toggle('active', i === stepIdx);
            stepIndicators[i].classList.toggle('active', i === stepIdx);
        });
    }

    function validateStep(stepIdx) {
        const currentInputs = steps[stepIdx].querySelectorAll('input[required], select[required]');
        let valid = true;
        currentInputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = 'var(--error)';
                valid = false;
            } else {
                input.style.borderColor = 'var(--border)';
            }
        });
        return valid;
    }

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = {
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            goal: document.getElementById('goal').value,
            frequency: parseInt(document.getElementById('frequency').value),
            time: document.getElementById('time').value,
            equipment: document.getElementById('equipment').value,
            injuries: Array.from(document.querySelectorAll('input[name="injury"]:checked')).map(cb => cb.value)
        };

        generatePrescription(userData);
    });

    function generatePrescription(data) {
        // 1. BMI Calculation
        const heightM = data.height / 100;
        const bmi = (data.weight / (heightM * heightM)).toFixed(1);
        let bmiLabel = '';
        if (bmi < 18.5) bmiLabel = '저체중';
        else if (bmi < 23) bmiLabel = '정상';
        else if (bmi < 25) bmiLabel = '과체중';
        else bmiLabel = '비만';

        document.getElementById('bmi-value').innerText = bmi;
        document.getElementById('bmi-label').innerText = bmiLabel;

        // 2. Calorie Estimation
        const baseCal = data.gender === 'male' ? 400 : 300;
        const calPerMin = 7;
        const estimatedCal = Math.round(baseCal + (data.time * calPerMin));
        document.getElementById('cal-value').innerText = estimatedCal;

        // 3. Safety Check
        const injuryCount = data.injuries.filter(i => i !== 'none').length;
        let safetyGrade = 'A';
        let safetyLabel = '매우 안전';
        if (injuryCount > 0) { safetyGrade = 'B'; safetyLabel = '주의 권장'; }
        if (injuryCount > 2) { safetyGrade = 'C'; safetyLabel = '재활 중심'; }
        
        document.getElementById('safety-value').innerText = safetyGrade;
        document.getElementById('safety-label').innerText = safetyLabel;

        // 4. Exercise Selection & Routine Generation
        const availableExercises = EXERCISE_DB.filter(ex => {
            // Equipment check
            if (data.equipment === 'body' && ex.equipment !== 'body') return false;
            if (data.equipment === 'dumbbell' && (ex.equipment !== 'body' && ex.equipment !== 'dumbbell')) return false;
            
            // Injury check
            const isUnsafe = ex.injuryAvoid.some(injury => data.injuries.includes(injury));
            return !isUnsafe;
        });

        const routine = generateWeeklySchedule(data.frequency, availableExercises);
        renderRoutine(routine);

        // UI Transition
        formSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function generateWeeklySchedule(frequency, exercises) {
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        const schedule = [];
        
        // Simple logic: Distribute workout days
        let workoutDays = [];
        if (frequency === 2) workoutDays = [1, 4];
        else if (frequency === 3) workoutDays = [0, 2, 4];
        else if (frequency === 4) workoutDays = [0, 1, 3, 4];
        else workoutDays = [0, 1, 2, 3, 4];

        days.forEach((day, idx) => {
            if (workoutDays.includes(idx)) {
                // Select 4-5 exercises
                const dailyEx = [];
                const categories = ['가슴', '등', '하체', '어깨', '코어', '유산소'];
                categories.forEach(cat => {
                    const catExercises = exercises.filter(e => e.category === cat);
                    if (catExercises.length > 0) {
                        dailyEx.push(catExercises[Math.floor(Math.random() * catExercises.length)]);
                    }
                });
                schedule.push({ day, rest: false, exercises: dailyEx.slice(0, 5) });
            } else {
                schedule.push({ day, rest: true, exercises: [] });
            }
        });

        return schedule;
    }

    function renderRoutine(schedule) {
        const container = document.getElementById('weekly-routine');
        container.innerHTML = '';

        schedule.forEach(dayInfo => {
            const dayCard = document.createElement('div');
            dayCard.className = `day-card ${dayInfo.rest ? 'rest-day' : ''}`;
            
            let exercisesHtml = '';
            if (dayInfo.rest) {
                exercisesHtml = '<div class="exercise-list"><p class="text-muted">충분한 휴식을 취하세요.</p></div>';
            } else {
                exercisesHtml = '<div class="exercise-list">';
                dayInfo.exercises.forEach(ex => {
                    exercisesHtml += `
                        <div class="exercise-item" onclick="openExerciseModal(${ex.id})">
                            <span class="exercise-name">${ex.name}</span>
                            <span class="exercise-meta">3세트 x 12회</span>
                        </div>
                    `;
                });
                exercisesHtml += '</div>';
            }

            dayCard.innerHTML = `
                <div class="day-header ${dayInfo.rest ? 'rest' : ''}">
                    <span>${dayInfo.day}</span>
                    <span>${dayInfo.rest ? '<i class="fas fa-bed"></i>' : '<i class="fas fa-running"></i>'}</span>
                </div>
                ${exercisesHtml}
            `;
            container.appendChild(dayCard);
        });
    }

    // Modal Handling
    window.openExerciseModal = function(exId) {
        const ex = EXERCISE_DB.find(e => e.id === exId);
        if (!ex) return;

        document.getElementById('modal-title').innerText = ex.name;
        document.getElementById('modal-desc').innerText = `${ex.category} 부위 운동으로, ${ex.equipment === 'body' ? '맨몸으로' : ex.equipment === 'dumbbell' ? '덤벨을 사용하여' : '헬스장 기구를 사용하여'} 수행합니다.`;
        document.getElementById('modal-tip').innerText = ex.tips;
        
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${ex.video}" allowfullscreen></iframe>`;
        
        modal.classList.remove('hidden');
    };

    closeModal.onclick = () => {
        modal.classList.add('hidden');
        document.getElementById('video-container').innerHTML = '';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
            document.getElementById('video-container').innerHTML = '';
        }
    };

    // CSV Download
    document.getElementById('download-csv').addEventListener('click', () => {
        const rows = [
            ['날짜', '운동명', '세트', '횟수', '비고'],
            ['2026-05-11', '예시 운동', '3', '12', '수행 완료']
        ];

        let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
        rows.forEach(rowArray => {
            let row = rowArray.join(",");
            csvContent += row + "\r\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "fit_script_routine.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Reset
    document.getElementById('reset-btn').addEventListener('click', () => {
        resultSection.classList.add('hidden');
        formSection.classList.remove('hidden');
        form.reset();
        currentStep = 0;
        showStep(0);
    });
});
