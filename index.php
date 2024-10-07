<?php
/**
 * The main template file
 *
 * @package ThisLight
 */
?>

<?php require_once( get_template_directory() . '/includes/page-top.php' ); ?>

            <h1 class="page__title">Blog</h1>

            <?php require_once( get_template_directory() . '/includes/ad.php' ); ?>

            <?php 
            if ( have_posts() ) {
                while ( have_posts() ) {
                    the_post(); 
            ?>
                    <div class="post-card bg-blue-dark text-white p-4 mb-10 overflow-hidden border border-slate-500">

                        <h2 class="text-white mt-0">
                            <a href="<?= the_permalink(); ?>"><?= the_title(); ?></a>
                        </h2>
                        
                        <a href="<?= the_permalink(); ?>">
                            <?= get_the_post_thumbnail(); ?>
                        </a>

                        <p><a class="no-underline text-white" href="<?= the_permalink(); ?>"><?= the_excerpt(); ?></a></p>
                        
                        <div class="text-sm"><?= the_date(); ?></div>

                    </div>
            <?php
                } // end while
            } // end if
            ?>

            <?php
            
            the_posts_pagination(
                array(
                    'mid_size'  => 0,
                    'prev_text' => sprintf(
                        '%s <span class="nav-prev-text">%s</span>',
                        '',
                        __( '<', 'twentynineteen' )
                    ),
                    'next_text' => sprintf(
                        '<span class="nav-next-text">%s</span> %s',
                        __( '>', 'twentynineteen' ),
                        ''
                    ),
                )
            );

            ?>

<?php require_once( get_template_directory() . '/includes/page-bottom.php' ); ?>
