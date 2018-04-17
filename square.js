module.exports = function (width){
    return {
        width: width,
        area: function(){
            return this.width * this.width;
        },
        circum: function(){
            return 4 * this.width;
        }
    }; // 객체는 중괄호로 표현
}