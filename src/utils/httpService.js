"use server"

export const fetchData = async (url) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        cache: "no-cache",
        headers: {
            "Accept-Language": "az"
        }

    });
    return res.json();
}