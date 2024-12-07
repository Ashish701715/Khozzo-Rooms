export const google_login = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const client_id = '1064859701522-smu7lvrhg63tfqeh9q867c82ehvjegmj.apps.googleusercontent.com';
    const redirect_uri = 'https://harmanjeetsinghvirdi.com/Khozzo_Rooms_Api/api/index.php?route=google/atuh/login/info';
    const scope = 'email profile';
    const googleLoginUrl = `${googleAuthUrl}?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}&access_type=offline`;
    
    window.location.href = googleLoginUrl;
};
