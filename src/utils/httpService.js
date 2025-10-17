"use server"

export const fetchData = async (url, locale) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        cache: "no-store",
        headers: {
            "Accept-Language": locale
        }

    });
    return res.json();
}