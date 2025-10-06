import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Rating,
    Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const AvisPage = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Sophie Martin",
            avatar: "https://randomuser.me/api/portraits/women/45.jpg",
            rating: 5,
            date: "12 Septembre 2025",
            comment: "Service exceptionnel ! Équipe professionnelle et réactive.",
        },
        {
            id: 2,
            name: "Jean Dupont",
            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
            rating: 4,
            date: "5 Septembre 2025",
            comment: "Bonne expérience, quelques détails à améliorer.",
        },
        {
            id: 3,
            name: "Laura Perez",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            rating: 5,
            date: "28 Août 2025",
            comment: "Interface intuitive, je recommande vivement !",
        },
    ]);

    const [index, setIndex] = useState(0);

    // Auto scroll
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const next = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 500,
                mx: "auto",
                mt: 6,
                textAlign: "center",
                position: "relative",
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Avis des utilisateurs
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 4,
                }}
            >
                <IconButton onClick={prev}>
                    <ArrowBackIos />
                </IconButton>

                <Box
                    sx={{
                        flex: 1,
                        mx: 2,
                        p: 3,
                        borderRadius: 4,
                        backgroundColor: "#f5f5f5",
                        minWidth: 300,
                        maxWidth: 400,
                        boxShadow: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        src={reviews[index].avatar}
                        alt={reviews[index].name}
                        sx={{ width: 70, height: 70, mb: 2 }}
                    />
                    <Typography variant="h6">{reviews[index].name}</Typography>
                    <Rating value={reviews[index].rating} readOnly precision={0.5} sx={{ mb: 1 }} />
                    <Typography variant="body2" color="text.secondary" mb={1}>
                        {reviews[index].date}
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                        “{reviews[index].comment}”
                    </Typography>
                </Box>

                <IconButton onClick={next}>
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </Box>
    );
};

export default AvisPage;
