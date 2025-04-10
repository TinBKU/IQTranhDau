import React, { createContext, useContext, useState } from 'react';

type ThemeType = 'light' | 'dark';

const ThemeContext = createContext<{
    theme: ThemeType;
    toggleTheme: () => void;
}>({
    theme: 'light',
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('light'); // ✅ mặc định là light

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
        // 🔁 Sau này có thể gọi set(ref(db, `users/${uid}/theme`), newTheme)
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
