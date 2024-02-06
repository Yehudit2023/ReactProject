export const defaultBD = {
    id: "123",
    name: "Interior Design",
    address: "Rothschild 60 Tel Aviv",
    phone: "03-1234567",
    owner: "Hila Alter",
    // logo: "https://coding-academy.org/images/ca_logo.png",
    description: "תחילתו של התהליך בפגישת היכרות שמטרתה הקשבה לצורכי הלקוחות והבנה של אורחות חייהם. הפגישה מתורגמת להכנת תכניות לכמה חלופות רעיוניות. משנבחרה התכנית המועדפת…",
}
export const defaultServices = [
    {
        id: '1',
        name: 'עיצוב דירה ',
        description: 'מדירת קבלן לבית מגורים מעוצב',
        price: '20,000',
        duration: 'שעתיים',

    }, {
        id: '2',
        name: 'עיצוב חדר ילדים',
        description: 'שימוש באלמנטים עיצוביים שונים ליצירת חללים פונקציונליים, אסתטיים ויעילים',
        price: '10,000',
        duration: 'שעה',

    }, {
        id: '3',
        name: 'הום סטייג`ינג',
        description: 'כיצד להעלות את ערך הדירה',
        price: '1,500',
        duration: 'שעה וחצי',
        // img:src=""
    }
];

export function  getCurrentDateTime () {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export function getColorClass(date) {
    const currentDate = new Date();
    const meetingDate = new Date(date);
  
    currentDate.setHours(0, 0, 0, 0);
    meetingDate.setHours(0, 0, 0, 0);
    
    const diffInDays = Math.floor((meetingDate - currentDate) / (1000 * 60 * 60 * 24));
  
    if (diffInDays === 0) {
      return "red";
    } else if (diffInDays <= 7) {
      return "orange";
    } else {
      return "green"; 
    }
  }
 