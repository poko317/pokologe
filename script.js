// 함수: 1에서 45 사이의 서로 다른 난수 6개 생성
function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

// 번호 추첨하기 버튼 클릭 이벤트 핸들러
document.getElementById('generate-btn').addEventListener('click', function() {
    const lottoNumbers = generateLottoNumbers();
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.textContent = lottoNumbers.join(', ');

    // SweetAlert2 알림창 표시
    Swal.fire({
        title: '로또 번호 추첨 완료!',
        html: `<p class="text-xl">추첨된 번호: <strong>${lottoNumbers.join(', ')}</strong></p>`,
        icon: 'success',
        confirmButtonText: '확인'
    });
});
