
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const profilesPath = './profiles.json'; 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); 



// task 1
app.get('/hello/amjad', (req, res) => {
    res.send('Hello, Amjad');
});


//task 2,3
app.post('/profile', (req, res) => {
    const profile = req.body;
    const requiredFields = ["Name", "Title", "Targeted Keywords", "Education", "Certification", "Contact"];
    const missingFields = requiredFields.filter(field => !profile[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({
            error: "Missing required fields",
            missing_fields: missingFields
        });
    }

    saveProfile(profile, res);
});

//task 4
const saveProfile = (profile, res) => {
    fs.readFile(profilesPath, 'utf-8', (err, data) => {
        if (err && err.code === 'ENOENT') {
            // Create profiles.json if it doesn't exist
            return fs.writeFile(profilesPath, JSON.stringify([profile], null, 4), (writeErr) => {
                if (writeErr) {
                    return res.status(500).json({ error: "Failed to create profiles file" });
                }
                res.status(201).json({ message: "Profile saved successfully" });
            });
        }

        if (err) {
            return res.status(500).json({ error: "Error reading profiles file" });
        }

        let profiles;
        try {
            profiles = JSON.parse(data);
        } catch (parseErr) {
            return res.status(500).json({ error: "Error parsing profiles file" });
        }

        profiles.push(profile);

        fs.writeFile(profilesPath, JSON.stringify(profiles, null, 4), (writeErr) => {
            if (writeErr) {
                return res.status(500).json({ error: "Failed to save profile" });
            }
            res.status(201).json({ message: "Profile saved successfully" });
        });
    });
};

// task 5
app.get('/profiles', (req, res) => {
    fs.readFile(profilesPath, 'utf-8', (err, data) => {
        if (err && err.code === 'ENOENT') {
            return res.status(200).json([]);
        }

        if (err) {
            return res.status(500).json({ error: "Failed to retrieve profiles" });
        }

        const profiles = JSON.parse(data);
        res.status(200).json(profiles);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
