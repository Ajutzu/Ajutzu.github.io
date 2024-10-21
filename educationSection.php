<?php
$education = [
    [
        'date' => '2009 - 2016',
        'school' => 'PILM Elementary School',
        'title' => 'Elementary Education',
        'description' => 'Attended PILM Elementary School in San Jose, Batangas, where I developed foundational skills and a love for learning.',
    ],
    [
        'date' => '2016 - 2020',
        'school' => 'Saint Joseph Academy',
        'title' => 'High School Education',
        'description' => 'Completed my secondary education at Saint Joseph Academy, San Jose, Batangas, excelling in various subjects and extracurricular activities.',
    ],
    [
        'date' => '2020 - 2022',
        'school' => 'Saint Joseph Academy',
        'title' => 'STEM Program',
        'description' => 'Enrolled in the Science, Technology, Engineering, and Mathematics (STEM) program, enhancing my analytical and technical skills.',
    ],
    [
        'date' => '2022 - Present',
        'school' => 'BSU - Lipa Campus',
        'title' => 'BSIT Program',
        'description' => 'Currently pursuing BSIT at BSU - Lipa Campus, focusing on software development and programming.',
    ],
];
?>

<!-- Education Section -->
<section class="container mt-5" id="educationSection">
    <h2 class="text-center pb-3 mb-5">Education</h2>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="timeline">
                <?php foreach ($education as $edu): ?>
                <div class="timeline-item">
                    <div class="timeline-content" data-aos="fade-right">
                        <span class="date"><?= $edu['date'] ?></span>
                        <h5 class="card-title"><?= $edu['title'] ?></h5>
                        <h6 class="card-subtitle mb-2 text-muted"><?= $edu['school'] ?></h6>
                        <p class="card-text"><?= $edu['description'] ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
